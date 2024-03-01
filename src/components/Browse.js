import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
function Browse() {
  useNowPlayingMovies();
  return (
    <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
    </div>
  )
}

export default Browse;