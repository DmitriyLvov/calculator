import { useAppDispatch, useAppSelector } from 'app/store';
import { ISign } from 'components/Views/ConstructorPanel/SignPanel/SignPanel';
import { saveNumber, setDecimal, setDisplay, setOperation } from 'slices/CalculatorSlice';

const useCalcOperations = () => {
  const dispatch = useAppDispatch();
  const { firstNumber, operation, displayNumber, displayText, isDecimal } =
    useAppSelector((state) => state.calculator);

  const formatNumber = (number: number) => {
    // Если количество символов меньше 18, то выводим обычный результат
    if (number.toString().length < 19 || number < 1) {
      // Если число меньше 0, то добавляем единицу для корректной работы движка JS
      if (number < 1) {
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
    // Ограничение по длине дисплея
    if (displayNumber.toString().length < 8) {
      // Обработка запятой
      if (digit === ",") {
        if (displayText.indexOf(",") === -1) {
          dispatch(setDecimal(true));
        }
        // Если нажали запятую без 0 на втором числе
        if (displayNumber === 0 && operation) {
          dispatch(setDisplay({ textFormat: "0", numberFormat: 0 }));
          dispatch(setDecimal(true));
        }
        return;
      }
      // Обработка цифр
      let numberFormat, textFormat;
      if (isDecimal) {
        // Если до этого была нажата запятая, то следующая цифра идет через "."
        numberFormat = Number.parseFloat(`${displayNumber}.${digit}`);
        textFormat = `${displayText},${digit}`;
        dispatch(setDecimal(false));
      } else {
        numberFormat = Number.parseFloat(`${displayNumber}${digit}`);
        textFormat = `${displayText}${digit}`;
      }
      // Если был обнулен числовой формат экрана (выбор знака), то перемещаем значение из числового
      if (
        textFormat.length !== numberFormat.toString().length &&
        numberFormat.toString().length === 1 &&
        operation
      ) {
        textFormat = digit;
      }

      // Обработка на запись многих нулей
      if (textFormat === "00") {
        textFormat = "0";
      }
      // Убираем 0, если вводим цифру
      if (
        textFormat[0] === "0" &&
        textFormat.length > 1 &&
        textFormat.indexOf(",") === -1
      ) {
        textFormat = textFormat[1];
      }
      dispatch(setDisplay({ numberFormat, textFormat }));
    }
  };

  const equalOperation = () => {
    let result = 0;
    switch (operation) {
      case "+": {
        result = firstNumber + displayNumber;
        break;
      }
      case "-": {
        result = firstNumber - displayNumber;
        break;
      }
      case "x": {
        result = firstNumber * displayNumber;
        break;
      }
      case "/": {
        result = firstNumber / displayNumber;
        break;
      }
      default: {
        break;
      }
    }

    const textFormat = handleResult(result);
    const numberFormat = result;
    console.log({ firstNumber, displayNumber, result });
    dispatch(setDisplay({ textFormat, numberFormat }));
    dispatch(saveNumber());
  };

  const addOperation = (sign: ISign) => {
    // Если нет числа, с которым нужно произвести операции, то сохраняем его в сторе
    if (!firstNumber) {
      dispatch(saveNumber());
    }
    dispatch(setOperation(sign));
  };
  return { addDigit, addOperation, equalOperation };
};

export default useCalcOperations;
