import { IMG_CDN_URL } from "../constants";

const MovieCategoryList = ({ title, moviesList }) => {
  return (
    <div className={`px-9 relative w-screen ${title === "Released in the Past Year" ? "bg-gradient-to-t from-black -mt-84" : "bg-black"}`}>
      <h1 className="text-white font-medium py-3">{title}</h1>
      <div className="flex gap-3 cursor-pointer">
        {(moviesList ?? []).map((movie) => (
          movie.poster_path && <div className="w-64" key={movie.id}>
            <img
              alt="movie-poster"
              src={IMG_CDN_URL + movie.poster_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCategoryList;
