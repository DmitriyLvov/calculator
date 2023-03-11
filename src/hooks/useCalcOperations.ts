import { useAppDispatch, useAppSelector } from 'app/store';
import { setDisplay, setOperation } from 'slices/CalculatorSlice';

const useCalcOperations = () => {
  const dispatch = useAppDispatch();
  const { mode, firstNumber, operation, display } = useAppSelector(
    (state) => state.calculator
  );
  const addDigit = (digit: string) => {
    console.log(display);
    if (digit === ",") {
      dispatch(setOperation(","));
    } else {
      if (operation === ",") {
        dispatch(setDisplay(Number.parseFloat(`${display}.${digit}`)));
      } else {
        dispatch(setDisplay(Number.parseFloat(`${display}${digit}`)));
      }
    }
  };
  return { addDigit };
};

export default useCalcOperations;
