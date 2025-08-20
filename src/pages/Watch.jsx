import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { useEffect } from "react";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";

function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useSidebar(); // get state + setter

  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setIsOpen(false); // close by default when entering watch
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch, setIsOpen]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <div className="max-h-screen overflow-hidden">
      {/* spacer for global navbar */}
      <div style={{ height: "7.5vh" }} />

      <div className="flex" style={{ height: "92.5vh" }}>
        {/* Sidebar togglable */}
        <Sidebar isOpen={isOpen} />

        {/* Video player */}
        <div className="flex-1 flex justify-center items-center">
          {currentPlaying && currentPlaying?.videoId === id && (
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              style={{ border: "none" }}
              width={800}
              height={502}
              allowFullScreen
              title="Youtube Player"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Watch;
