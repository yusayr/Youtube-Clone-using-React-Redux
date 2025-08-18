import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { useEffect } from "react";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import Navbar from "../components/Navbar";

function Watch() {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentPlaying = useAppSelector(
        (state) => state.youtubeApp.currentPlaying
    );
    const recommendedVideo = useAppSelector(
        (state) => state.youtubeApp.recommendedVideo
    )

    console.log(currentPlaying)

    useEffect(() => {
        if (id) {
            dispatch(getVideoDetails(id));
        }
        else {
            navigate("/")
        }
    }, [id, navigate, dispatch])

    useEffect(() => {
        if (currentPlaying && id) dispatch(getRecommendedVideos(id));
    }, [currentPlaying, dispatch, id]);

    return (
        <div>
            {currentPlaying && currentPlaying?.videoId === id && (
                <div className='max-h-screen overflow-hidden'>
                    <div style={{ height: "7.5vh" }}>
                        <Navbar />
                    </div>
                    <div>
                        <div>
                            <div>
                                <div className="flex justify-center items-center h-[92.5vh]">
                                    <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                    style={{ border: "none" }}
                                    width={800}
                                    height={502}
                                    allowFullScreen
                                    title="Youtube Player">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Watch