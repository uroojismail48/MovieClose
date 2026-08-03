import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative">
      <div className="flex justify-between bg-black/50 items-center px-4 py-3">
        <h1 className="font-bold text-xl">Agency</h1>

        {/* Hamburger button - sirf mobile pe dikhega */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
        </button>

        {/* Desktop links - hamesha dikhenge md+ pe */}
        <div className="hidden md:flex gap-6">
          <a href="">news</a>
          <a href="">Movies</a>
          <a href="">Series</a>
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