import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Home = () => {
  useNowPlayingMovies();

  return (
    <>
      <MainContainer/>
      <SecondryContainer/>
    </>
  )
}

export default Home;