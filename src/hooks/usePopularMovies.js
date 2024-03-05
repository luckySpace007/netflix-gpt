import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';
const usePopularMovies = () => {
    // fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const PopularMovies = useSelector(store => store.movies.addPopularMovies);

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', 
    API_OPTIONS
  );
  const json = await data.json();
  dispatch(addPopularMovies(json.results));
};

  useEffect(() => {
    if(!PopularMovies) getPopularMovies();
  },[])
}

export default usePopularMovies;