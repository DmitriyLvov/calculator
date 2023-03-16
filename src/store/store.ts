import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import calculatorReducer from "../slices/CalculatorSlice";
import modeReducer from "../slices/ModeSlice";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  mode: modeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
