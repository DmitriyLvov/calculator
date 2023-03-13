import { useAppDispatch, useAppSelector } from "app/store";
import { ISign } from "components/Views/ConstructorPanel/SignPanel/SignPanel";
import {
  saveNumber,
  setDisplay,
  setOperation,
  setResultWasShown,
} from "slices/CalculatorSlice";

const useCalcOperations = () => {
  const dispatch = useAppDispatch();
  const { firstNumber, operation, displayNumber, resultWasShown } =
    useAppSelector((state) => state.calculator);

  const converStringToNum = (num: string) => {
    if (num.indexOf(",") > -1) {
      return Number.parseFloat(num.replace(",", "."));
    } else {
      return Number.parseInt(num);
    }
  };

  const formatNumber = (number: number) => {
    // Если количество символов меньше 18, то выводим обычный результат
    if (number.toString().length < 19 || number < 1) {
      // Если число меньше 0, то добавляем единицу для корректной работы движка JS
      if (number < 1 && number > 0) {
        const result = (+(number + 1).toFixed(15)).toString().replace(".", ",");
        return `0${result.substring(1)}`;
      }
      return (+number.toFixed(15)).toString().replace(".", ",");
    }
    // Если больше, то уменьшаем до 12 символов, чтобы уместить степень
    return number.toFixed(12).replace(".", ",");
  };

  const handleResult = (result: number) => {
    // Если делим на ноль, то выводим "Не определено"
    if (!Number.isFinite(result)) {
      return "Не определено";
    }

    return formatNumber(result);
  };

  const addDigit = (digit: string) => {
    if (resultWasShown) {
      dispatch(setResultWasShown(false));
      // Если после знака нажали "0", то сохраняем "0"
      if (digit === ",") {
        dispatch(setDisplay("0,"));
      } else {
        dispatch(setDisplay(digit));
      }
      return;
    }

    // Ограничение по длине дисплея
    if (displayNumber.length < 8) {
      // Обработка нескольких запятых
      if (digit === "," && displayNumber.indexOf(",") > -1) {
        return;
      }

      if (displayNumber === "0") {
        // Обработка на запись многих нулей в начале
        if (digit === "0") return;
        // Убираем 0, если вводим цифру
        if (digit !== ",") return dispatch(setDisplay(digit));
      }

      dispatch(setDisplay(`${displayNumber}${digit}`));
    }
  };

  const equalOperation = () => {
    let result = 0;
    const num1 = converStringToNum(firstNumber);
    const num2 = converStringToNum(displayNumber);
    switch (operation) {
      case "+": {
        result = num1 + num2;
        break;
      }
      case "-": {
        result = num1 - num2;
        break;
      }
      case "x": {
        result = num1 * num2;
        break;
      }
      case "/": {
        result = num1 / num2;
        break;
      }
      default: {
        break;
      }
    }
    const textFormat = handleResult(result);
    dispatch(setDisplay(textFormat));
    dispatch(saveNumber());
  };

  const addOperation = (sign: ISign) => {
    // Если нет числа, с которым нужно произвести операции, то сохраняем его в сторе
    if (firstNumber === "0") {
      console.log("save ");
      dispatch(saveNumber());
    }
    // Последовательные операции без нажатия "="
    if (operation && firstNumber) {
      equalOperation();
    }
    dispatch(setOperation(sign));
  };
  return { addDigit, addOperation, equalOperation };
};

export default useCalcOperations;
