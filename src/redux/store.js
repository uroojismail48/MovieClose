import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./BookmarkSlice";

export const store = configureStore({
    reducer : {
        bookmark : bookmarkReducer
    }
})