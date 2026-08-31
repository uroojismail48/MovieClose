
import { RiBookmarkFill } from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../redux/BookmarkSlice";
import ViewDetails from "../components/ViewDetails";

function Wishlist() {
 const dispatch =  useDispatch()
const bookmarked = useSelector((state) =>  state.bookmark.bookmarked)



  return (
    <div className="w-full min-h-screen bg-black text-white p-6 ">
      <div className="liner w-full h-1 bg-purple-600 my-20">      </div>
<h1 className="text-4xl font-bold mb-8  px-20">My Wishlist</h1>
<ViewDetails/>
      {bookmarked.length === 0 ? (
        <p className="text-gray-400">No movies bookmarked yet.</p>
      ) : (
        <div className="w-full flex flex-wrap gap-4 justify-start px-20 py-10 items-center">
          {bookmarked.map((movie) => (
            <div className="w-60 h-80 rounded-md relative" key={movie.id}>
              <img
                className="h-full w-full absolute object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
              <h1 className="absolute backdrop-blur-[2px]">{movie.title}</h1>

              <button
                onClick={() => dispatch(toggleBookmark(movie))}
                className="absolute right-0 top-0"
              >
                <RiBookmarkFill size={30} className="text-red-600" />
              </button>
            </div>
          ))}
        </div>
      )}
  
    </div>
  );
}

export default Wishlist;

  