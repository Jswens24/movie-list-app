import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieScreen from './components/MovieScreen';
import WatchList from './components/WatchList';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
      .then(res => {
        console.log(res.data.results);
        setMovieList(res.data.results)
      })
      .catch(err => console.log(err))
  };

  const addMovie = (movie) => {
    setWatchList([...watchList, movie])
  }

  const removeMovie = (movie) => {
    const newState = watchList.filter((mov) => {
      return mov !== movie
    })
    setWatchList(newState)
  }

  useEffect(() => {
    getData();
  }, [page])

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          watchList={watchList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <WatchList watchList={watchList} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
