import Doom from '../assets/doomsday.mp4'
function Vd() {
  return (
    <div className="h-screen w-full ">
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
    <video className="h-100 w-full object-cover border border-white/30 
 rounded-4xl  
    
    " 
    autoPlay muted preload='auto'
    
    src={Doom}></video>
    </div> 
  </div>
  )
}

export default Vd