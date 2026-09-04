import { RiArrowLeftLine, RiArrowRightLine, RiSearchLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import Bookedmarked from "../components/Bookedmarked";
import {
  useGetPopularSeriesQuery,
  useSearchSeriesQuery,
  useGetSeriesByGenreQuery,
} from "../redux/FetchMovie";

import { Link } from "react-router-dom";

function Series() {
   const [now] = useState(() => Date.now());

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState(1);

 const popularResult = useGetPopularSeriesQuery(
    { page },
    { skip: searchQuery !== "" || selectedGenre !== "" }
  );

  const searchResult = useSearchSeriesQuery(
    { query: searchQuery, page },
    { skip: searchQuery === "" }
  );
  const genreResult = useGetSeriesByGenreQuery(
    { genreId: selectedGenre, page },
    { skip: selectedGenre === "" }
  );
    const activeResult = searchQuery
    ? searchResult
    : selectedGenre
    ? genreResult
    : popularResult;

      const { data, isLoading, isError } = activeResult;
  const series = data?.results || [];
  const totalPages = data?.total_pages || 1;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    window.scrollTo(0, 0);
  }, [page, searchQuery, selectedGenre]);

  function nextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
    setSelectedGenre("");
    setPage(1);
  }

  function handleGenre(e) {
    setSelectedGenre(e.target.value);
    setSearchQuery("");
    setPage(1);
  }

  return (
    <div className="bg-black min-h-screen w-full absolute text-white">
      <div className="liner w-full h-1 bg-red-600 mt-20"></div>

      <div className="flex gap-20 flex-col h-150 w-full relative">
        <div className="w-full mt-20 flex justify-center items-center px-4 flex-col">
          <div className="flex flex-col justify-center items-center">
            <h1
              style={{ WebkitTextStroke: "1px white" }}
              className="font-bold text-7xl text-transparent"
            >
              Binge Worthy
            </h1>

            <div className="w-full flex mt-10 font-bold text-2xl uppercase overflow-hidden gap-10 justify-center items-center text-center">
              <div className="w-full flex gap-20">
                <h1>"Stories</h1>
                <h1>that</h1>
                <h1>keep</h1>
                <h1>you</h1>
                <h1>hooked,</h1>
                <h1>episode</h1>
                <h1>after</h1>
                <h1>episode."</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-10 text-white gap-10 relative flex justify-center items-center">
          <label htmlFor="input" className="flex gap-10">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search series..."
              name="input"
              id="input"
              className="border w-140 px-10 py-4 rounded-2xl relative"
            />
            <button className="px-10 p-2 rounded-md absolute translate-y-2 translate-x-119">
              <RiSearchLine />
            </button>
          </label>

          <select
            name="Genre"
            onChange={handleGenre}
            value={selectedGenre}
            className="text-white border border-red-400 w-50 p-4 rounded-md scroller-none bg-red-600 flex flex-col justify-center items-center font-bold text-lg text-center"
            id="genre"
          >
            <option className="font-bold text-lg bg-black" value="">All Genres</option>
            <option className="font-bold text-lg bg-black" value="10759">Action & Adventure</option>
            <option className="font-bold text-lg bg-black" value="35">Comedy</option>
            <option className="font-bold text-lg bg-black" value="80">Crime</option>
            <option className="font-bold text-lg bg-black" value="18">Drama</option>
            <option className="font-bold text-lg bg-black" value="10765">Sci-Fi & Fantasy</option>
            <option className="font-bold text-lg bg-black" value="9648">Mystery</option>
            <option className="font-bold text-lg bg-black" value="16">Animation</option>
          </select>
        </div>

        <div>
          <h1 className="absolute left-30 top-120 font-semibold text-[20px]">
            <span className="font-bold">RESULTS : </span>
            Total Pages : <span className="text-gray-400">{totalPages}</span>
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-4 px-4 justify-center items-center">
        {series.map((serie) => (
          <div className="group w-60 h-80 rounded-md relative" key={serie.id}>
            <img
              className="h-full w-full absolute object-cover"
              src={
                serie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
                  : "/fallback.jpg"
              }
              alt={serie.name}
            />
            <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center z-10 pointer-events-none group-hover:pointer-events-auto">
      <Link
        to={`/series/${serie.id}`}
        className="border flex py-3 px-4 gap-3 rounded-md bg-white/20 cursor-pointer font-bold hover:bg-white hover:text-black transition"
      >
        View Description
      </Link>
    </div>
     <div className="z-10 relative ">
      <Bookedmarked items={serie} />
    
      {now < new Date(serie.release_date).getTime() ? (
        <h1 className="absolute  left-0 font-bold">
          Coming Soon : {serie.release_date}
        </h1>
      ) : (
        <h1 className="absolute bottom-0 left-0 font-bold">Released</h1>
      )}
    </div>
            <h1 className="absolute backdrop-blur-[2px] text-bold bottom-0">
              {serie.name}
            </h1>
    
            <div className="">
              <h1 className="absolute bottom-0 right-0 font-bold">
                {serie.original_language}
              </h1>
     
            </div>
          </div>
        ))}
      </div>

      <div className="w-full p-6 flex gap-10 justify-center items-center bg-black font-bold">
        <button onClick={prevPage} className="cursor-pointer h-10" disabled={page === 1}>
          <RiArrowLeftLine />
        </button>
        <span><h1>{page}</h1></span>
        <button onClick={nextPage} className="animate-pulse cursor-pointer" disabled={page >= totalPages}>
          <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
}

export default Series;