import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';
const useUpcomingMovies = () => {
    // fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const upcominggMovies = useSelector(store => store.movies.addUpcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
    API_OPTIONS
  );
  const json = await data.json();
  
  dispatch(addUpcomingMovies(json.results));
};

  useEffect(() => {
    if(!upcominggMovies) getUpcomingMovies();
  },[])
}

export default useUpcomingMovies;