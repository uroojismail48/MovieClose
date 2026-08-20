import Doom from '../assets/doomsday.mp4'
import Cicle from '../assets/circle.png'
import { useEffect, useState } from 'react';
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
function Vd() {
         const [movies, setMovies] = useState([])
        const [now] = useState(() => Date.now())
        const apikey = import.meta.env.VITE_API_KEY;
        async function bb(){
          const data = await fetch(     `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_companies=420&language=en-US&sort_by=popularity.desc`)
          const res =  await data.json()
         setMovies(res.results)
        console.log(res.results);
        
        }
        useEffect(()=> 
        {
                bb()
        },[])
        
  return (
    <div className="h-screen w-full  ">
         <div className="circlemax h-80   w-120  absolute ">
 <div className="one w-full h-full bg-red-600 absolute"></div>
 <div className="two  bg-red-600  absolute right-0"></div>
<div className="three    bg-red-600 absolute"></div>
</div>
<div className="v h-full z-[999] relative  w-full px-40">
    <h1 className='text-7xl py-20 font-bold flex w-full border justify-center
     items-center text-center text-transparent'
       style={{ WebkitTextStroke: '1px white' }}
     >"Lights. Camera. Discover."</h1>
    <video className="h-100 w-full object-cover  border-white/30 
 rounded-4xl  
    
    " 
    autoPlay muted preload='auto'
    
    src={Doom}></video>
    </div> 

    <div className="w-full flex mt-10 font-bold text-6xl uppercase text-transparent
    overflow-hidden
    
    gap-10 justify-center items-center text-center" style={{WebkitTextStroke:'1px white'}}>
<div className="w-full flex gap-20 scoll">
       <h1>See </h1>
        <img src={Cicle} className='h-10 w-10' alt="" />
            <h1>It </h1>
                    <img src={Cicle} className='h-10 w-10' alt="" />
 <h1> Before</h1>
         <img src={Cicle} className='h-10 w-10' alt="" />
 <h1>You</h1>
        <img src={Cicle} className='h-10 w-10' alt="" />
 <h1> Stream </h1>
         <img src={Cicle} className='h-10 w-10' alt="" />
 <h1>It</h1>
          
                 <h1>See </h1>
        <img src={Cicle} className='h-10 w-10' alt="" />
            <h1>It </h1>
                    <img src={Cicle} className='h-10 w-10' alt="" />
 <h1> Before</h1>
         <img src={Cicle} className='h-10 w-10' alt="" />
 <h1>You</h1>
        <img src={Cicle} className='h-10 w-10' alt="" />
 <h1> Stream </h1>
         <img src={Cicle} className='h-10 w-10' alt="" />
 <h1>It</h1>
        <h1>See </h1>
        <img src={Cicle} className='h-10 w-10' alt="" />
            <h1>It </h1>
                    <img src={Cicle} className='h-10 w-10' alt="" />
 <h1> Before</h1>
         <img src={Cicle} className='h-10 w-10' alt="" />
 <h1>You</h1>
        <img src={Cicle} className='h-10 w-10' alt="" />
 <h1> Stream </h1>
         <img src={Cicle} className='h-10 w-10' alt="" />
 <h1>It</h1>
</div>
    </div>
<div className="w-full h-screen bg-black relative">

<div className="three  right-0  bg-red-600 absolute"></div>
<div className="relative   w-full h-100 overflow-x-hidden mt-20 flex justify-center  pointer-events-none
items-center flex-1">
        {movies.length > 0 && (
<Swiper 
  dir="rtl"
spaceBetween={10}
loop={true}
speed={4000 }
slidesPerView="auto"
  freeMode={{
       enabled: true,
  momentum: false,
}}
  autoplay={{
    delay: 0,

  }}
 modules={[Autoplay, FreeMode]}
className="w-full h-full  absolute"

>
        {movies.map((movie) => (
<SwiperSlide className='  h-[60px]
 !w-[300px] flex shrink-0 justify-center items-center' key={movie.id}>
      <img
        className="h-full w-full object-cover "
  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
<div className="absolute w-full h-full inset-0 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
      <div className="absolute top-0 left-0 
     
      px-4 border  border-white/60 backdrop-blur-[2px] text-bold rounded-md ">
        <h1>{movie.title}</h1>
       
      </div>
       <h1  className='absolute bottom-0 right-0 font-bold'>{movie.original_language}</h1>
        {now < new Date( movie.release_date).getTime() ? (

            <h1  className='absolute bottom-0 left-0 font-bold'>Coming Soon : {movie.release_date}</h1>
       ): (
 <h1  className='absolute bottom-0 left-0 font-bold'>Released</h1>
       ) 

           
       
}
<h1 className="absolute top-0 right-0 text-center flex">{movie.vote_average.toFixed(1)}</h1>
 

</SwiperSlide>
))}
</Swiper>
        )}


</div>

</div>


</div>
 
  )
}

export default Vd