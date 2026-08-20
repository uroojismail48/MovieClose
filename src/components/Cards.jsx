import { useEffect, useState } from "react";

import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";


function Cards({ className = "" }) {
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
        // eslint-disable-next-line react-hooks/set-state-in-effect
        apiFetch();
      }, []);

  
  return (
<div className= {` w-full  ${className} `}>
{movies.length > 0 && (
<Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView="auto"
  initialSlide={1}
  observer={true}
  observeParents={true}
  speed={600}
    loop={true} 
 
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: true,
  }}
  modules={[EffectCoverflow]}
  className="w-full h-[400px]  "
>
  {movies.map((movie) => (
    <SwiperSlide
      key={movie.id}
      className="!w-[300px]  rounded-2xl overflow-hidden "
    >
      <img
        className="h-full w-full object-cover "
  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2
     
      px-4 border  border-white/60 backdrop-blur-[2px] text-bold rounded-md ">
        <h1>{movie.title}</h1>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


) }




  
</div>

  )
}

export default Cards;