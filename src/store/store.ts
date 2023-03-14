import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import calculatorReducer from "../slices/CalculatorSlice";
import modeReducer from "../slices/ModeSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    mode: modeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
