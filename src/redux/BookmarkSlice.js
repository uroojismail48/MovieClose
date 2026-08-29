import { createSlice } from "@reduxjs/toolkit";

const  savedBookmarks = localStorage.getItem("BookmarkedMovies")
const initialState = {
    bookmarked : savedBookmarks ? JSON.parse(savedBookmarks) : []
}
const BookmarkSlice = createSlice({
name : "bookmark",
initialState,
    reducers :  {
toggleBookmark : (state, action) => {
    const items = action.payload;
    const exist = state.bookmarked.some((m) => m.id === items.id)
    if(exist){
        state.bookmarked = state.bookmarked.filter((m) => m.id !== items.id)
    }else{
        state.bookmarked.push(items)
    };
    localStorage.setItem("BookmarkedMovies", JSON.stringify(state.bookmarked));
}
}
})

export default BookmarkSlice.reducer;
export const {toggleBookmark} = BookmarkSlice.actions;