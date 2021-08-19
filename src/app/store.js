import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReduer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReduer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
