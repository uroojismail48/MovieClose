import { RiGooglePlayFill } from "@remixicon/react";
import {  useState } from "react";


function TrailerBtn({movieId}) {

    const [view, setView] = useState([])
     const apikey = import.meta.env.VITE_API_KEY;
    async function WatchtTrailer(){
        const data = await fetch(    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apikey}&language=en-US`)
const res = await data.json()
console.log(res.results)
setView(res.results)
const tray = res.results.find(
    (vids) => vids.type === "Trailer" && vids.site === "YouTube"
)
if(tray){
  window.open(`https://www.youtube.com/watch?v=${tray.key}`, "_blank");
}else{
      alert("Trailer not available for this movie");
}
    }

  
  return (
    <div>
        
          <button 
          onClick={WatchtTrailer}
          
          className='border hover:border-black
        font-bold text-lg  hover:bg-red-600  transition-discrete duration-500
          flex py-3 px-4 gap-3 rounded-md bg-white/20 cursor-pointer'>Watch Trailer <RiGooglePlayFill /></button>

    </div>
  )
}

export default TrailerBtn