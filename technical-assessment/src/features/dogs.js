import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {};

const dogsSlice = createSlice({
  name: "dogs",
  initialState: { value: initialStateValue },
  reducers: {
    setDogData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDogData } = dogsSlice.actions;

export default dogsSlice.reducer;
