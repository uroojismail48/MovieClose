import { useState } from "react";
import { RiSearchLine} from  "@remixicon/react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative ">
      <div className="flex  rounded-md justify-between items-center px-4 py-3">
     <div className="">
         <h1 className="font-bold justify-center text-xl flex gap-2 items-center text-orange-700 text-center">
          <span className="bg-orange-700 py-2 px-3
text-white         
         rounded-md text-center">
        Movie
        </span>
        Close</h1>
     </div>

        {/* Hamburger button - sirf mobile pe dikhega */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
        </button>

        {/* Desktop links - hamesha dikhenge md+ pe */}
        <div className="hidden md:flex gap-10 font-bold text-lg">
          <a href="">New Movie</a>
          <a href="">Genre</a>
          <a href="">Country</a>
          <a href="">Movie</a>
          <a href="">Series</a>
          <span>|</span>
<RiSearchLine />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`md:hidden 
        font-semibold
        absolute w-full  bg-black/50  flex flex-row gap-6 justify-center overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 py-4" : "max-h-0"}`}>
        <a href="">news</a>
        <a href="">Movies</a>
        <a href="">Series</a>
      </div>
    </div>
  );
}

export default Navbar;