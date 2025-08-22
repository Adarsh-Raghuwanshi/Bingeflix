import React from "react";
import MovieCategoryList from "./MovieCategoryList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  if(!nowPlayingMovies) return;
  
  const moviesCategory = [
    {
      title: "Released in the Past Year",
      movies: nowPlayingMovies,
    },
    {
      title: "Now Playing",
      movies: nowPlayingMovies,
    },
    {
      title: "Popular",
      movies: nowPlayingMovies,
    },
    {
      title: "Top Rated",
      movies: nowPlayingMovies,
    },
    {
      title: "Upcoming",
      movies: nowPlayingMovies,
    },
  ];

  return (
    <div className="bg-black w-screen">
      {moviesCategory.map((category) => (
        <MovieCategoryList title={category.title} moviesList={category.movies} key={category.title}/>
      ))}
    </div>
  );
};

export default SecondryContainer;
