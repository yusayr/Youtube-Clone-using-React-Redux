import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../components/Card'

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      {/* Body (Navbar already comes from App.jsx) */}
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar isOpen={sidebarOpen} />

        {/* Main Content */}
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Home;
