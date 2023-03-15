import { ISign } from "components/business/SignPanel/SignPanel";
import { CalcComponentType } from "components/Views/ConstructorPanel/ConstructorPanel";
import { converStringToNum, handleResult } from "utils/formatResult";

import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  operation?: ISign;
  firstNumber: string;
  displayNumber: string;
  specification: CalcComponentType[];
  resultWasShown: boolean;
}

const initialState: IInitialState = {
  specification: [],
  displayNumber: "0",
  firstNumber: "0",
  resultWasShown: false,
};

const calculate = (
  operation: ISign | undefined,
  num1: number,
  num2: number
) => {
  switch (operation) {
    case "+": {
      return handleResult(num1 + num2);
    }
    case "-": {
      return handleResult(num1 - num2);
    }
    case "x": {
      return handleResult(num1 * num2);
    }
    case "/": {
      return handleResult(num1 / num2);
    }
    default: {
      return "Неверная операция";
    }
  }
};

const showResultOnDisplay = (
  textNumber1: string,
  textNumber2: string,
  operation: ISign
) => {
  const num1 = converStringToNum(textNumber1);
  const num2 = converStringToNum(textNumber2);
  return calculate(operation, num1, num2);
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addDigit: (state, action) => {
      if (state.resultWasShown) {
        state.resultWasShown = false;
        // Если нажали "," без цифры, то сохраняем "0,"
        if (action.payload === ",") {
          state.displayNumber = "0,";
        } else {
          state.displayNumber = action.payload;
        }
        return state;
      }

      //   // Ограничение по длине дисплея
      if (state.displayNumber.length < 17) {
        // Обработка нескольких запятых
        if (action.payload === "," && state.displayNumber.indexOf(",") > -1) {
          return state;
        }
        if (state.displayNumber === "0") {
          // Обработка на запись многих нулей в начале
          if (action.payload === "0") return;
          // Убираем 0, если вводим цифру
          if (action.payload !== ",") {
            state.displayNumber = action.payload;
            return state;
          }
        }
        state.displayNumber = `${state.displayNumber}${action.payload}`;
      }
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
      // Если нет числа, с которым нужно произвести операции, то сохраняем его в сторе
      if (state.firstNumber === "0") {
        state.firstNumber = state.displayNumber;
        state.resultWasShown = true;
      }
      // Последовательные операции без нажатия "="
      if (
        state.operation &&
        state.firstNumber !== "0" &&
        !state.resultWasShown
      ) {
        state.displayNumber = showResultOnDisplay(
          state.firstNumber,
          state.displayNumber,
          state.operation
        );
        state.firstNumber = state.displayNumber;
        state.resultWasShown = true;
      }
    },
    equalOperation: (state) => {
      if (state.operation) {
        state.displayNumber = showResultOnDisplay(
          state.firstNumber,
          state.displayNumber,
          state.operation
        );
        state.resultWasShown = true;
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
    resetData: (state) => {
      state.firstNumber = "0";
      state.displayNumber = "0";
      state.operation = undefined;
    },
  },
});

export const {
  addDigit,
  setOperation,
  equalOperation,
  resetData,
  changeSpecificaion,
} = counterSlice.actions;

export default counterSlice.reducer;
