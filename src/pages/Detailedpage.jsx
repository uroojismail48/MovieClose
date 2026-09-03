import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailedPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const apikey = import.meta.env.VITE_API_KEY;

  async function fetchDetail() {
    setIsLoading(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&language=en-US&append_to_response=videos,credits,similar`
    );
    const data = await res.json();
    setMovie(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchDetail();
    window.scrollTo(0, 0);
  }, [movieId]);

  if (isLoading && !movie) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <p className="text-white p-10">Loading...</p>
      </div>
    );
  }

  const trailer = movie.videos?.results?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );
  const director = movie.credits?.crew?.find((c) => c.job === "Director");
  const cast = movie.credits?.cast?.slice(0, 6) || [];
  return (
    <div className="w-full min-h-screen bg-black text-white ">
  
      <div className="relative w-full h-[80vh]">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        <div className="absolute bottom-10 left-20 max-w-2xl">
          <h1 className="text-6xl font-bold mb-4">{movie.title}</h1>
        <div className="max-w-2xl mb-8">
          <p className={showFullDescription ? "" : "line-clamp-3"}>
            {movie.overview}
          </p>
          {movie.overview?.length > 200 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-red-500 font-semibold text-sm mt-2"
            >
              {showFullDescription ? "View Less" : "View More"}
            </button>
          )}
        </div>

          <div className="flex gap-4 items-center mb-4 text-sm text-gray-400">
            <span>{movie.release_date}</span>
            <span>•</span>
            <span>{movie.runtime} min</span>
            <span>•</span>
            <span> {movie.vote_average?.toFixed(1)}</span>
          </div>

          <div className="flex gap-3 flex-wrap mb-4">
            {movie.genres?.map((g) => (
              <span key={g.id} className="border px-3 py-1 rounded-full text-xs">
                {g.name}
              </span>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 px-6 py-3 rounded-md font-bold"
              >
                Watch Trailer 
              </a>
            )}
          
          </div>
        </div>
      </div>

      
      <div className="p-10">
        {director && (
          <p className="mb-6 text-lg">
            <span className="text-gray-400">Director: </span>
            <span className="font-bold">{director.name}</span>
          </p>
        )}

        <h2 className="text-2xl font-bold mb-4">Cast</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {cast.map((actor) => (
            <div key={actor.id} className="w-32 shrink-0">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "/fallback.jpg"
                }
                alt={actor.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="text-sm mt-2">{actor.name}</p>
              <p className="text-xs text-gray-400">{actor.character}</p>
            </div>
          ))}
        </div>

        
        <h2 className="text-2xl font-bold mt-10 mb-4">Similar Movies</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {movie.similar?.results?.slice(0, 7).map((sim) => (
            <Link key={sim.id} to={`/movie/${sim.id}`} className="w-40 shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${sim.poster_path}`}
                alt={sim.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <p className="text-sm mt-2">{sim.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailedPage;