import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { alert: false };

const alertSlice = createSlice({
  name: "alert",
  initialState: { value: initialStateValue },
  reducers: {
    setAlertState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAlertState } = alertSlice.actions;

export default alertSlice.reducer;
