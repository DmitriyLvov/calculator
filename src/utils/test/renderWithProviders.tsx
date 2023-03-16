import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { render } from "@testing-library/react";

import { setupStore } from "../../store/store";

import type { AppStore, RootState } from "../../store/store";

import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const preloadedState: RootState = {
  mode: {
    specification: ["Numbers", "Equal", "Display", "Signs"],
    mode: "Runtime",
  },
  calculator: {
    firstNumber: "0",
    resultWasShown: false,
    displayNumber: "0",
  },
};

export function renderWithProviders(
  ui: React.ReactElement,
  {
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
