import { useState } from "react";
import ai from "../openai";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { setSuggestedMovies } from "../redux/slices/moviesSlice";

const GptSearch = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const searchMovies = async(searchedMovie) => {
    const resp = await fetch("https://api.themoviedb.org/3/search/movie?query=" + searchedMovie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const data = await resp.json();
    
    return data.results;
  }

  const handleClick = async () => {
    if(searchText.trim() === "") return;
    const geminiQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText + ". Only give me names of 5 movies, comma seperated like the example given ahead. Example Result: Gadar, Koi Mil Gaya, Sholay, Don, Golmaal";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiQuery,
    });
    
    const geminiSuggestion = response.text.split(",");

    const promiseArray = geminiSuggestion.map((m) => searchMovies(m));
    const moviesList = await Promise.all(promiseArray);

    dispatch(setSuggestedMovies({moviesName: geminiSuggestion, moviesList}));
    setSearchText("");
   };

  return (
    <div>
      <form
        className="w-[30%] absolute z-10 top-30 left-135 p-4 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-white/70 rounded-lg col-span-10 p-2"
          type="text"
          placeholder="Search for movies..."
        />
        <button
          className="col-span-2 bg-red-700 ml-3 rounded-lg cursor-pointer text-white"
          onClick={handleClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
