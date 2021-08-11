import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReduer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReduer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
