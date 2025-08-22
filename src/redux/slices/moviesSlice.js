import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        bgVideoId: null,
    },
    reducers:{
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setBgVideoId: (state, action) => {
            state.bgVideoId = action.payload;
        }
    }
})

export const {setNowPlayingMovies, setBgVideoId} = moviesSlice.actions;
export default moviesSlice.reducer;