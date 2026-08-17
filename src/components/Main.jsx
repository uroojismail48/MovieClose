import { useEffect } from 'react';
import Navbar from './Navbar'
import Swiper from 'swiper';
import "swiper/css";

function Main({movies}) {
    useEffect(()=> {
    new Swiper(".swiper",{
        slidesPerView:1,
        spaceBetween:20,
    })
},[])

  return (
    <div className="bg-black h-screen w-full relative ">
        <div className="w-full absolute top-0 left-0  z-9999">
            <Navbar/>
        </div>
<div className="swiper h-full w-full">
    <div className="swiper-wrapper" >
        {movies.map((movie)=> (
            
            <div className="swiper-slide bg-black w-full h-full relative " key={movie.id}>
               
       <img
    className="h-full w-full object-cover"
    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
    alt={movie.title}
  />
  <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10">
    <h1>{movie.title}</h1>
  </div>
            </div>

        ))}
    </div>
</div>
    </div>
  )
}

export default Main;