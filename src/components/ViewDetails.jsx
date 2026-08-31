import { Link } from "react-router-dom"
import DetailedPage from "../pages/Detailedpage"

function ViewDetails() {
  return (
    <div>
         <button 
         
          className='border hover:border-black
        font-bold text-lg  hover:bg-red-600  transition-discrete duration-500
          flex py-3 px-4 gap-3 rounded-md bg-white/20 cursor-pointer'>
            
            {/* <Link to={<DetailedPage:/>} /> */}
            View Details
            </button>
<div class="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">

</div>
    </div>
  )
}

export default ViewDetails;