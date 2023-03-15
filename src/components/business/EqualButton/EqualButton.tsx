import StandartButton from "components/UI/StandartButton/StandartButton";
import { memo, useCallback } from "react";
import { ConnectDragSource } from "react-dnd";
import { equalOperation } from "slices/CalculatorSlice";
import { useAppDispatch } from "store/store";

import styles from "./EqualButton.module.scss";

interface EqualButtonProps {
  styleClass?: string;
  isDisabled?: boolean;
  drag?: ConnectDragSource;
}

const EqualButton = memo(
  ({ isDisabled = false, styleClass, drag }: EqualButtonProps) => {
    const dispatch = useAppDispatch();
    const equalHandler = useCallback(() => {
      dispatch(equalOperation());
    }, []);

    return (
      <div
        className={styles[styleClass ? styleClass : "component"]}
        ref={drag ? drag : undefined}
      >
        <StandartButton
          text="="
          onClick={equalHandler}
          color="primary"
          isDisabled={isDisabled}
        />
      </div>
    );
  }
);

export default EqualButton;
