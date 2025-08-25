import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        bgVideoId: null,
        suggestedMoviesName: null,
        suggestedMoviesList: null,
    },
    reducers:{
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setBgVideoId: (state, action) => {
            state.bgVideoId = action.payload;
        },
        setSuggestedMovies: (state, action) => {
            const {moviesName, moviesList} = action.payload;
            state.suggestedMoviesName = moviesName;
            state.suggestedMoviesList = moviesList;
        }
    }
})

export const {setNowPlayingMovies, setBgVideoId, setSuggestedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;