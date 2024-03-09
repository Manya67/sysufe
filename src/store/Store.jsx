import { configureStore } from "@reduxjs/toolkit";
import FavSlice from "../slice/FavSlice";

const store = configureStore({
  reducer: {
    favSlice: FavSlice,
  },
});
export default store;
