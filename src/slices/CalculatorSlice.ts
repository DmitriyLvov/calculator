import { CalcComponentType } from "components/Views/ConstructorPanel/ConstructorPanel";
import { ISign } from "components/Views/ConstructorPanel/SignPanel/SignPanel";

import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  mode: "Constructor" | "Runtime";
  operation?: ISign;
  firstNumber: string;
  displayNumber: string;
  specification: CalcComponentType[];
  resultWasShown: boolean;
}

const initialState: IInitialState = {
  mode: "Constructor",
  specification: [],
  displayNumber: "0",
  firstNumber: "0",
  resultWasShown: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      state.displayNumber = action.payload;
    },
    setResultWasShown: (state, action) => {
      state.resultWasShown = action.payload;
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
    },
    saveNumber: (state) => {
      state.firstNumber = state.displayNumber;
      state.resultWasShown = true;
    },
    setMode: (state, action) => {
      if (state.mode !== action.payload) {
        state.mode = action.payload;
        state.displayNumber = "0";
        state.operation = undefined;
        state.firstNumber = "0";
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

export const {
  setDisplay,
  saveNumber,
  setMode,
  changeSpecificaion,
  setResultWasShown,
  setOperation,
} = counterSlice.actions;

export default counterSlice.reducer;
