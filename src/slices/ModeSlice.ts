import { createSlice } from "@reduxjs/toolkit";

type IInitialState = { mode: "Constructor" | "Runtime" };

const initialState: IInitialState = { mode: "Constructor" };

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action) => {
      if (state.mode !== action.payload) {
        state.mode = action.payload;
      }
    },
  },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
