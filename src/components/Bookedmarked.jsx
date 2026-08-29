import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark } from "../redux/BookmarkSlice";
import { RiBookmarkLine } from "@remixicon/react";
import { RiBookmarkFill as Filled } from "@remixicon/react";

function Bookedmarked({items, size = 30}) {
const dispatch = useDispatch()
const bookmarked = useSelector((state ) => state.bookmark.bookmarked)
  
const isBookmarked = bookmarked.some((m) => m.id === items.id)
return (
    <div>
<button onClick={() => dispatch(toggleBookmark(items))}>
{isBookmarked ? (
        <Filled size={size} className="text-red-600 absolute right-0 top-0 animate-pulse" />
      ) : (
        <RiBookmarkLine size={size} className="text-white absolute right-0 top-0" />
      ) }
</button>
    </div>
  )
}

export default Bookedmarked;