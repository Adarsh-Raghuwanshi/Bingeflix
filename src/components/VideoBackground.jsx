import { useSelector } from "react-redux";
import useBackgroundVideo from "../hooks/useBackgroundVideo";

const VideoBackground = ({ movieId }) => {
  const videoId = useSelector((store) => store.movies.bgVideoId);
  useBackgroundVideo(movieId);

  if (!videoId) return null;
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playlist=${videoId}&loop=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
