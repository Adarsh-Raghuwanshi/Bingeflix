import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setBgVideoId } from "../redux/slices/moviesSlice";

const useBackgroundVideo = (movieId) => {
  const videoId = useSelector((store) => store.movies.bgVideoId);
  const dispatch = useDispatch();

  const getBackgroundVideo = async (id) => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await resp.json();
    const videoId = data.results.filter((v) => v?.type === "Trailer")[0]?.key;
    dispatch(setBgVideoId(videoId));
  };

  useEffect(() => {
    !videoId && getBackgroundVideo(movieId);
  }, []);
};

export default useBackgroundVideo;
