import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./BookmarkSlice";
import { movieApi } from "./FetchMovie";
export const store = configureStore({
    reducer : {
        bookmark : bookmarkReducer,
         [movieApi.reducerPath]: movieApi.reducer,
    },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
