import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import GptPage from "./GptPage";

const Home = () => {
  useNowPlayingMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <>
      {showGptSearch ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </>
  );
};

export default Home;
