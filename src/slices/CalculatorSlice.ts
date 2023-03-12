import { CalcComponentType } from 'components/Views/ConstructorPanel/ConstructorPanel';
import { ISign } from 'components/Views/ConstructorPanel/SignPanel/SignPanel';

import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  mode: "Constructor" | "Runtime";
  operation?: ISign;
  isDecimal: boolean;
  firstNumber: number;
  displayNumber: number;
  displayText: string;
  specification: CalcComponentType[];
}

const initialState: IInitialState = {
  mode: "Constructor",
  specification: [],
  displayNumber: 0,
  firstNumber: 0,
  displayText: "0",
  isDecimal: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      const { textFormat, numberFormat } = action.payload;
      state.displayText = textFormat;
      state.displayNumber = numberFormat;
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
    },
    setDecimal: (state, action) => {
      state.isDecimal = action.payload;
    },
    saveNumber: (state) => {
      state.firstNumber = state.displayNumber;
      state.displayNumber = 0;
    },
    setMode: (state, action) => {
      if (state.mode !== action.payload) {
        state.mode = action.payload;
        state.displayText = "0";
        state.displayNumber = 0;
      }
    },
    changeSpecificaion: (state, action) => {
      const { operation } = action.payload;
      if (operation === "addElement") {
        const { type, index, currentIndex } = action.payload;
        if (currentIndex === -1) {
          state.specification.splice(index, 0, type);
        } else {
          state.specification.splice(
            index,
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
  setOperation,
  setDecimal,
} = counterSlice.actions;

export default counterSlice.reducer;
