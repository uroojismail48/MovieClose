import Navbar from "./Navbar"
import hero from '../assets/main.jpg'

function Main() {
  return (
    <div className="flex flex-row">
   
      <div className="bg-black w-16 md:w-20 text-center flex justify-center items-center">
        <div className="icons text-center">icons</div>
      </div>

      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat gap-10 flex flex-col"
        style={{
          backgroundImage: `url(${hero})`
        }}
      >
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="relative z-10">

        <Navbar />

        <div className="w-full h-full px-10 flex flex-col gap-3 mt-10">
          <div>
            <input
              type="text"
              className="mt-8 border border-white bg-gray-500/40 w-full sm:w-6/12 md:w-4/12
              h-10 p-4 rounded-md"
              placeholder="Search"
              name=""
              id=""
            />
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mt-7">
              AVENGERS
              <span>
                <br />
                The End Game
              </span>
            </h1>

            <div className="flex flex-wrap w-full sm:w-[40%]">
              <h2>
                Avengers: Endgame is a 2019 American superhero film produced
                by Marvel Studios and directed by Anthony and Joe Russo.
              </h2>
            </div>

            <h1>Stars</h1>
          </div>

          <div className="flex h-15 w-full sm:w-90 gap-4 flex-col sm:flex-row">
            <button className="w-40 h-10 border items-center font-bold rounded-md p-2 text-center bg-purple-950/70">
              Watch Now
            </button>
            <button className="w-40 h-10 rounded-md bg-white/20 p-2 text-center border items-center">
              Download
            </button>
          </div>

        <h1 className="mt-10">Populer Movies</h1>
        </div>
          
      </div>
       </div>
    </div>
  )
}

export default Main