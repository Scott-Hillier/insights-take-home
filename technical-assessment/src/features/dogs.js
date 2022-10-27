import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

const dogsSlice = createSlice({
  name: "dogs",
  initialState: { value: initialStateValue },
  reducers: {
    setDogColumns: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDogColumns, getDogs } = dogsSlice.actions;

export default dogsSlice.reducer;
