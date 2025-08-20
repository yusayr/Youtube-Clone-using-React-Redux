import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'
import { clearVideos } from '../features/youtube/youtubeSlice'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos'
import SearchCard from '../components/SearchCard'

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    useEffect(() => {
        if (!searchTerm.trim()) {
            navigate("/");
            return;
        }

        // when landing on /search with a valid searchTerm → fetch videos
        dispatch(clearVideos());
        dispatch(getSearchPageVideos({ isNext: false, searchTerm }));
    }, [dispatch, navigate, searchTerm]);

    return (
        <div className="max-h-screen overflow-hidden">
            <div className="flex" style={{ height: "92.5vh" }}>
                <Sidebar />
                {videos.length ? (
                    <div className="py-8 pl-8 flex flex-col gap-5 w-full">
                        <InfiniteScroll
                            dataLength={videos.length}
                            next={() =>
                                dispatch(getSearchPageVideos({ isNext: true, searchTerm }))
                            }
                            hasMore={videos.length < 500}
                            loader={<Spinner />}
                            height={650}
                        >
                            {videos.map((item) => (
                                <div className="my-5" key={item.videoId}>
                                    <SearchCard data={item} />
                                </div>
                            ))}
                        </InfiniteScroll>
                    </div>
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    );
};

export default Search;
