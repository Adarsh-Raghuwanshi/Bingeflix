import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoDetails from "./VideoDetails";

const MainContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  if(!nowPlayingMovies) return;

  const mainMovie = nowPlayingMovies[0];

  return(
    <div>
        <VideoDetails title={mainMovie?.original_title} description={mainMovie?.overview}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  );
};

export default MainContainer;