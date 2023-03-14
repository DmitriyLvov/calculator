import { memo, useCallback } from "react";
import { addDigit } from "slices/CalculatorSlice";
import { useAppDispatch } from "store/store";

import StandartButton from "../../UI/StandartButton/StandartButton";
import styles from "./NumberButton.module.scss";

interface INumberButtonProps {
  number: string;
  module: number;
  isDisabled?: boolean;
}

const NumberButton = memo(
  ({ number, module, isDisabled = true }: INumberButtonProps) => {
    const width = `${(module - 1) * 8 + module * 72}px`;

    const dispatch = useAppDispatch();

    const clickHandler = useCallback(() => {
      dispatch(addDigit(number));
    }, []);

    return (
      <div className={styles.component} style={{ width }}>
        <StandartButton
          text={number}
          onClick={clickHandler}
          color="secondary"
          isDisabled={isDisabled}
        />
      </div>
    );
  }
);

export default NumberButton;
