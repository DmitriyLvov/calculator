import {
  addDigit,
  equalOperation,
  resetData,
  setOperation,
} from "slices/CalculatorSlice";
import { useAppDispatch } from "store/store";

const numPadKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];
const operationKeys = ["+", "-", "/"];

const useHotKeys = () => {
  const dispatch = useAppDispatch();
  const keyExecute = (key: string) => {
    if (key === "Enter" || key === "=") {
      dispatch(equalOperation());
    }
    if (numPadKeys.indexOf(key) > -1) {
      dispatch(addDigit(key));
    }
    if (operationKeys.indexOf(key) > -1) {
      dispatch(setOperation(key));
    }
    if (key === "*") {
      dispatch(setOperation("x"));
    }
    if (key === "Escape") {
      dispatch(resetData());
    }
  };
  return keyExecute;
};

export default useHotKeys;
