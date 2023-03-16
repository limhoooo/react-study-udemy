import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState('');
  const fetchMoviesHandler = useCallback(
    async () => {
      setMovies([])
      setIsLoding(true)
      try {
        const res = await fetch('https://react-test-d49b3-default-rtdb.firebaseio.com/movies.json');
        if (!res.ok) {
          throw new Error('error hihihi')
        }
        const data = await res.json();

        const loadMovies = [];
        for (const key in data) {
          loadMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          })
        }
        setMovies(loadMovies);
      } catch (error) {
        setError(error.message)
      }
      setIsLoding(false)
    }, [])

  const addMovieHandler = useCallback(async (movie) => {
    await fetch('https://react-test-d49b3-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: { 'Content-Type': 'application/json' }
      }
    );
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  let content = <p>Found no movies.</p>;
  if (error) content = <p>{error}</p>
  if (isLoding) content = <p>Loding...</p>
  if (movies.length > 0) content = <MoviesList movies={movies} />
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
