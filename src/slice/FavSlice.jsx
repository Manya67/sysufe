import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
  name: "fav",
  initialState: { items: [] },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      const index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
    },
  },
});
export const { addItems, removeItems } = FavSlice.actions;
export default FavSlice.reducer;
