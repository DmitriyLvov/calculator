import { addDigit, resetData, setOperation } from "slices/CalculatorSlice";
import { RootState, setupStore } from "store/store";
import { renderWithProviders } from "utils/test/renderWithProviders";

import { fireEvent, screen } from "@testing-library/react";

import DisplayCalculator from "./components/Views/DisplayPanel/Calculator/DisplayCalculator/DisplayCalculator";

const preloadedState: RootState = {
  mode: {
    specification: ["Numbers", "Equal", "Signs", "Display"],
    mode: "Runtime",
  },
  calculator: {
    firstNumber: "0",
    resultWasShown: false,
    displayNumber: "0",
  },
};

const store = setupStore(preloadedState);

describe("Test Render", () => {
  it("Snapshot", () => {
    const component = renderWithProviders(<DisplayCalculator />, { store });
    expect(component).toMatchSnapshot();
  });
});

describe("Test Calculations", () => {
  it("Add operation", () => {
    store.dispatch(addDigit("0,1"));
    store.dispatch(setOperation("+"));
    store.dispatch(addDigit("0,2"));
    renderWithProviders(<DisplayCalculator />, { store });
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByText("0,3")).toBeInTheDocument();
  });
  it("Minus operation", () => {
    store.dispatch(resetData());
    store.dispatch(addDigit("90"));
    store.dispatch(setOperation("-"));
    store.dispatch(addDigit("70"));
    renderWithProviders(<DisplayCalculator />, { store });
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByText("20")).toBeInTheDocument();
  });
  it("Multiply operation", () => {
    store.dispatch(resetData());
    store.dispatch(addDigit("9"));
    store.dispatch(setOperation("x"));
    store.dispatch(addDigit("7"));
    renderWithProviders(<DisplayCalculator />, { store });
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByText("63")).toBeInTheDocument();
  });
  it("Divide operation", () => {
    store.dispatch(resetData());
    store.dispatch(addDigit("490"));
    store.dispatch(setOperation("/"));
    store.dispatch(addDigit("7"));
    renderWithProviders(<DisplayCalculator />, { store });
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByText("70")).toBeInTheDocument();
  });
  it("Divide by zero", () => {
    store.dispatch(resetData());
    store.dispatch(addDigit("490"));
    store.dispatch(setOperation("/"));
    store.dispatch(addDigit("0"));
    renderWithProviders(<DisplayCalculator />, { store });
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByText("Не определено")).toBeInTheDocument();
  });
});

describe("Test Input", () => {
  it("Press number 1234567890", () => {
    store.dispatch(resetData());
    renderWithProviders(<DisplayCalculator />, { store });
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "6" }));
    fireEvent.click(screen.getByRole("button", { name: "7" }));
    fireEvent.click(screen.getByRole("button", { name: "8" }));
    fireEvent.click(screen.getByRole("button", { name: "9" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    expect(screen.getByText("1234567890")).toBeInTheDocument();
  });
});

describe("Manual Operation", () => {
  it("Press 11 + 22", () => {
    store.dispatch(resetData());
    renderWithProviders(<DisplayCalculator />, { store });
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByText("33")).toBeInTheDocument();
  });
  it("Press 11 + 22 + 33", () => {
    store.dispatch(resetData());
    renderWithProviders(<DisplayCalculator />, { store });
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(screen.getByText("66")).toBeInTheDocument();
  });
});
