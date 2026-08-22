import { useEffect, useState } from "react";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

function StrangerThings() {
  const [seasons, setSeasons] = useState([]);

  async function getStrangerThings() {
    const apikey = import.meta.env.VITE_API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/66732?api_key=${apikey}&language=en-US`
    );
    const data = await res.json();
    setSeasons(data.seasons);
  }

  useEffect(() => {
    getStrangerThings();
  }, []);

  return (
    <div className="w-full h-110 mt-10 bg-black text-white">
      <div className="relative w-full h-100 overflow-x-hidden flex justify-center items-center flex-1">
        {seasons.length > 0 && (
          <Swiper
            dir="rtl"
            spaceBetween={10}
            loop={true}
            speed={4000}
            slidesPerView="auto"
            freeMode={{ enabled: true, momentum: false }}
            autoplay={{ delay: 0 }}
            modules={[Autoplay, FreeMode]}
            className="w-full h-full absolute"
          >
            {[...seasons, ...seasons].map((season, i) => (
              <SwiperSlide
                key={i}
                className="relative h-[300px] !w-[300px] flex shrink-0 justify-center items-center"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                  alt={season.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-black via-black/40 to-transparent"></div>
                <h1 className="absolute bottom-2 left-2 font-bold">
                  {season.name}
                </h1>
                <h1 className="absolute top-2 right-2 font-bold">
                  {season.episode_count} eps
                </h1>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default StrangerThings;