import { RiArrowLeftLine, RiArrowRightLine, RiSearchLine } from "@remixicon/react";
import { useEffect, useState } from "react";

function Series() {
  const apikey = import.meta.env.VITE_API_KEY;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchSeries() {
    let url;
    if (searchQuery !== "") {
      url = `https://api.themoviedb.org/3/search/tv?api_key=${apikey}&query=${searchQuery}&language=en-US&page=${page}`;
    } else if (selectedGenre !== "") {
      url = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_genres=${selectedGenre}&sort_by=popularity.desc&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=${page}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setSeries(data.results);
    setTotalPages(data.total_pages);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchSeries();
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

            <h1 className="absolute backdrop-blur-[2px] text-bold">
              {serie.name}
            </h1>

            <div className="">
              <h1 className="absolute bottom-0 right-0 font-bold">
                {serie.original_language}
              </h1>
              <h1 className="absolute bottom-0 left-0 font-bold">
                {serie.first_air_date}
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