import { useSelector } from "react-redux";
import MovieCategoryList from "./MovieCategoryList";

const GptSuggestions = () => {
  const { suggestedMoviesName, suggestedMoviesList } = useSelector(
    (store) => store.movies
  );
  if (!suggestedMoviesName) return;

  return (
    <div className="bg-black/50 w-1/3 absolute top-60 mx-18 p-10">
      {suggestedMoviesName.map((movie, indx) => (
        <MovieCategoryList
          title={movie}
          moviesList={suggestedMoviesList[indx]}
          key={movie}
        />
      ))}
    </div>
  );
};

export default GptSuggestions;
