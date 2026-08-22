import { useEffect, useState } from "react";
function NewMovies() {
      const [movies, setMovies] = useState([]);
  const apikey = import.meta.env.VITE_API_KEY;

  async function fetchUpcoming() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`
    );
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
  }
let oneMovie = movies.slice(0,2)[0]
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUpcoming();
  }, []);

  return (
    <div className="bg-black h-screen w-full absolute text-white">
        <div className="liner w-full h-1 bg-red-600 mt-20">

        </div>

    {/* <div className="h-100 w-full mt-10">
  {oneMovie ? (
    <div className="w-full  max-w-xs">
      <img
        src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
        alt={oneMovie.title}
        className="rounded-lg w-full object-cover"
      />
      <h1 className="text-sm mt-2">{oneMovie.title}</h1>
      <p className="text-xs text-gray-400">{oneMovie.release_date}</p>
    </div>
  ) : (
    <h1>Loading...</h1>
  )}
</div> */}
<div className="w-full h-screen border flex justify-center items-center px-4 ">
     <h1
     style={{WebkitTextStroke: "1px white"}}
     className="font-bold text-7xl text-transparent">UPCOMING</h1>
</div>
        
     </div>

  )
}

export default NewMovies