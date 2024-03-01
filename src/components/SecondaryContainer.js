import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store =>  store.movies);
  return (
   movies && (
      <div className='bg-black pl-12 '>
        <div className='-mt-50 relative z-20 '>
          <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies }/>
          <MovieList title = {"Up-Comming"} movies = {movies.addUpcomingMovies }/>
          <MovieList title = {"Popular"} movies = {movies.addPopularMovies }/>
          <MovieList title = {"Top Rated"} movies = {movies.addTopRatedMovies }/>
      </div>
    </div> 
    )
  )
}

export default SecondaryContainer