import { CalcComponentType } from "components/Views/ConstructorPanel/ConstructorPanel";

import { createSlice } from "@reduxjs/toolkit";

type IInitialState = {
  mode: "Constructor" | "Runtime";
  specification: CalcComponentType[];
};

const initialState: IInitialState = { mode: "Constructor", specification: [] };

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action) => {
      if (state.mode !== action.payload) {
        state.mode = action.payload;
      }
    },
    changeSpecificaion: (state, action) => {
      const { operation } = action.payload;
      if (operation === "addElement") {
        const { type, index, currentIndex } = action.payload;
        if (currentIndex === -1) {
          state.specification.splice(index, 0, type);
        } else {
          const correctedIndex = currentIndex < index ? index - 1 : index;
          state.specification.splice(
            correctedIndex,
            0,
            state.specification.splice(currentIndex, 1)[0]
          );
        }
      }
      if (operation === "deleteElement") {
        const { index } = action.payload;
        state.specification.splice(index, 1);
      }
    },
  },
});

export const { changeSpecificaion, setMode } = modeSlice.actions;

export default modeSlice.reducer;
