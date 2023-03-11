import { CalcComponentType } from 'components/Views/ConstructorPanel/ConstructorPanel';

import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  mode: "Constructor" | "RunTime";
  operation?: "/" | "*" | "+" | "-" | ",";
  firstNumber?: number;
  display: number;
  specification: CalcComponentType[];
}

const initialState: IInitialState = {
  mode: "Constructor",
  specification: [],
  display: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plus: (state) => {
      if (state.firstNumber && state.display) {
        state.display = state.firstNumber + state.display;
      }
    },
    minus: (state) => {
      if (state.firstNumber && state.display) {
        state.display = state.firstNumber - state.display;
      }
    },
    multiply: (state) => {
      if (state.firstNumber && state.display) {
        state.display = state.firstNumber * state.display;
      }
    },
    divide: (state) => {
      if (state.firstNumber && state.display) {
        state.display = state.firstNumber / state.display;
      }
    },
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
    },
    saveNumber: (state) => {
      state.firstNumber = state.display;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    changeSpecificaion: (state, action) => {
      const { operation, type, index } = action.payload;
      if (operation === "add") {
        state.specification.splice(index, 0, type);
      }
    },
  },
});

export const {
  plus,
  minus,
  multiply,
  divide,
  setDisplay,
  saveNumber,
  setMode,
  changeSpecificaion,
  setOperation,
} = counterSlice.actions;

export default counterSlice.reducer;
