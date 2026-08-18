import { useEffect, useState } from "react";
import Main from "./Main";
import Cards from './Cards'
function Data() {
  const [movies, setMovies] = useState([]);
  const apikey = import.meta.env.VITE_API_KEY;

  async function apiFetch() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
  }

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <div>
      <Main movies={movies} />
    <Cards movies={movies}/>
    </div>
  );
}

export default Data;