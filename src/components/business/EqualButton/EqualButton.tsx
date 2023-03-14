import StandartButton from "components/UI/StandartButton/StandartButton";
import useDragND from "hooks/useDragND";
import { memo, useCallback } from "react";
import { equalOperation } from "slices/CalculatorSlice";
import { useAppDispatch, useAppSelector } from "store/store";

import styles from "./EqualButton.module.scss";

interface EqualButtonProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const EqualButton = memo(
  ({ isDraggable = false, isCanHide = false }: EqualButtonProps) => {
    const { drag, styleMode } = useDragND("Equal", isDraggable, isCanHide);

    const dispatch = useAppDispatch();

    const { mode } = useAppSelector((state) => state.mode);

    const equalHandler = useCallback(() => {
      dispatch(equalOperation());
    }, []);

    return (
      <div
        className={styles[`component${styleMode}`]}
        ref={isDraggable ? drag : undefined}
      >
        <StandartButton
          text="="
          onClick={equalHandler}
          color="primary"
          isDisabled={mode === "Constructor"}
        />
      </div>
    );
  }
);

export default EqualButton;
