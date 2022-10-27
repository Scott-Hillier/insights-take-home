import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {};

const dogsSlice = createSlice({
  name: "dogs",
  initialState: { value: initialStateValue },
  reducers: {
    setDogs: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDogs, getDogs } = dogsSlice.actions;

export default dogsSlice.reducer;
