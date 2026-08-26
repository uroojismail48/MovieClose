import { RiArrowLeftLine, RiArrowRightLine,  RiBookmarkLine, RiSearchLine } from "@remixicon/react";
import {RiBookmarkFill  as Filled} from "@remixicon/react"
import { useEffect, useState } from "react";
function NewMovies() {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const apikey = import.meta.env.VITE_API_KEY;
const [searchQuery, setSearchQuery] = useState("")
const [bookmarked, setBookmarked] = useState([])
 const [now] = useState(() => Date.now())
const [selectedGenre, setSelectedGenre] = useState("")
  async function fetchUpcoming() {
    let url ;
      if(searchQuery !==  ""){
          url =  `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchQuery}&language=en-US&page=${page}`
 
      }else if (selectedGenre !== "" ){
url =   `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=${selectedGenre}&sort_by=popularity.desc&page=${page}`
    ;
      }else{
   url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=${page}`
    ;
      }
   
    const res = await fetch(url);
    const data = await res.json()
    console.log(data.results);
    setMovies(data.results);
    setTotalPages(data.total_pages);
  }
// let oneMovie = movies.slice(0,2)[0]
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUpcoming();
    window.scrollTo(0,0)
  }, [page,searchQuery, selectedGenre]);

  
function nextPage(){
  if(page<totalPages)
  {
setPage(page + 1)
  }
}

  function prevPage(){
  if(page > 1)
  {
setPage(page - 1)
  }
  
}
function handleSearchChange(e){
setSearchQuery(e.target.value)
  setSelectedGenre("")  
setPage(1)
}
function handleGenre(e){
  setSelectedGenre(e.target.value)
setSearchQuery("")
setPage(1)
}

function ToggleBookmarked(moviesId){
setBookmarked((prev)=> prev.includes(moviesId) ? prev.filter((id) => id !== moviesId) : [...prev, moviesId])

}

  return (
    <div className="bg-black h-screen w-full absolute text-white ">
        <div className="liner w-full h-1 bg-red-600 mt-20">

        </div>

<div className=" flex gap-20  flex-col h-150 w-full relative">
<div className="w-full mt-20 flex justify-center items-center px-4 flex-col ">
  <div className=" flex flex-col justify-center items-center  ">  
     <h1
     style={{WebkitTextStroke: "1px white"}}
     className="font-bold text-7xl text-transparent">What's New Coming</h1>
       <div className="w-full flex mt-10 font-bold text-2xl uppercase 
    overflow-hidden
    
    gap-10 justify-center items-center text-center" >
<div className="w-full flex gap-20">
       <h1>"Coming</h1>
 
            <h1>soon</h1>
            
 <h1>   to</h1>
     
 <h1> screen</h1>

 <h1> Stream </h1>
        
 <h1>near</h1>
     <h1> you."</h1>
      
   
  </div>
  
</div>
     </div>

</div>

<div className="w-full h-10 text-white gap-10 relative  
  flex justify-center items-center ">
<label htmlFor="input" className="flex  gap-10  " >
<input type="text" value={searchQuery} onChange={handleSearchChange}
placeholder="What's Coming...?"
name="input" className="border w-140 px-10 py-4 rounded-2xl
relative
" id="input" />  
<button className="px-10 p-2 rounded-md absolute translate-y-2  translate-x-119  ">
  <RiSearchLine />
</button>

</label>
<select name="Genre" onChange={handleGenre} value={selectedGenre}
className="text-white border border-red-400 w-50 p-4 rounded-md scroller-none bg-red-600 
flex flex-col justify-center items-center font-bold text-lg text-center
"
id="">
Genre
<option  className="font-bold text-lg bg-black "  value="">All Genres</option>
<option  className="font-bold text-lg bg-black " value="27">Horror</option>
<option   className="font-bold text-lg bg-black"value="12">Adventure</option>
<option   className="font-bold text-lg bg-black"  value="80">Crime</option>
<option  className="font-bold text-lg bg-black "  value="99">Documentary</option>
<option   className="font-bold text-lg bg-black"  value="35">Comedy</option>
<option  className="font-bold text-lg bg-black" value="16">Animation</option>
</select>
</div>
<div className=""><h1 className="absolute left-30 top-120 font-semibold text-[20px] ">
  <span className="font-bold">RESULTS : </span>
  Total Pages : <span className="text-gray-400">{totalPages}</span></h1>
      

</div>

       </div> 
<div className="w-full flex flex-wrap 
gap-4 px-4 justify-center items-center  ">
   {movies.map((movie)=> (
<div className="w-60 h-80 rounded-md relative" key={movie.id}>
       <img
                className="h-full w-full absolute object-cover "
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
              <h1 className="absolute 
              backdrop-blur-[2px] text-bold
              ">{movie.title}</h1>
             <div className="">
            <button className="transition-transform duration-250" onClick={()=> ToggleBookmarked(movie.id)}> 
              {
                bookmarked.includes(movie.id) ? (
                  <Filled size={30} className="text-red-600 absolute right-0 top-0 animate-pulse " /> 
                ) : (
 <RiBookmarkLine size={30} className="text-white absolute right-0 top-0 " />
                )
              }
          
           </button>
                  <h1  className='absolute bottom-0 right-0 font-bold'>{movie.original_language}</h1>
        {now < new Date( movie.release_date).getTime() ? (

            <h1  className='absolute bottom-0 left-0 font-bold'>Coming Soon : {movie.release_date}</h1>
       ): (
 <h1  className='absolute bottom-0 left-0 font-bold'>Released</h1>
       ) }
             </div>

</div>
 ))}

</div>
<div className="w-full p-6  flex gap-10 justify-center items-center bg-black font-bold">
  <button onClick={prevPage} className="cursor-pointer h-10" disabled={page === 1}><RiArrowLeftLine /></button>
  <span><h1>{page}</h1></span>
  <button onClick={nextPage} className="animate-pulse cursor-pointer" disabled={page >= totalPages}><RiArrowRightLine /></button>
</div>
     </div>

  )
}

export default NewMovies;