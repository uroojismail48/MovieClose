import { useEffect, useState } from "react";

function Genres() {
    const [movies, setMovies] = useState([])
    async function getGenreList() {
             const apikey = import.meta.env.VITE_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`
  );
  const data = await res.json();
  console.log(data.genres);  
  setMovies(data.genres)
  // [{id: 28, name: "Action"}, {id: 35, name: "Comedy"}, ...]
}
useEffect(()=> 
{
getGenreList()

},[])
  return (
    <div className="w-full h-auto  mt-30 pointer-event-cursor"> 
        {movies.slice(0,6).map((movie) => 
        (
             <div className="w-full 
            
             border-b hover:bg-white hover:text-red-600 h-20
 zoom-90             flex justify-center items-center  text-8xl
          text-white font-bold "
          key={movie.id}
          
          > 
             <h1>
                {movie.name}</h1>
       </div>
        )
          
           
        )}
    </div>
  )
}

export default Genres