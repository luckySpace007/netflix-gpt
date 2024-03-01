import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies : (state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state , action) => {
            state.addPopularMovies = action.payload;
        },
        addUpcomingMovies : (state , action) => {
            state.addUpcomingMovies = action.payload;
        },
        addTopRatedMovies : (state , action) => {
            state.addTopRatedMovies = action.payload;
        },
        addTrailerVideo: (state , action) => {
            state.trailerVideo = action.payload;
        }
    },
});

export const { addNowPlayingMovies , addTrailerVideo , addPopularMovies , addUpcomingMovies , addTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
