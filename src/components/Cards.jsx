import { useEffect, useState } from "react";


function Cards() {
     const [movies, setMovies] = useState([]);
      const apikey = import.meta.env.VITE_API_KEY;
    
      async function apiFetch() {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=2`
        );
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
      }
    
      useEffect(() => {
        apiFetch();
      }, []);

  
  return (
    <div className="text-black w-full h-50 bg-purple-500 border">

    </div>
  )
}

export default Cards;