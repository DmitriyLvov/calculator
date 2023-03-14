import useDragND from "hooks/useDragND";
import { memo, useCallback } from "react";
import { setOperation } from "slices/CalculatorSlice";
import { useAppDispatch, useAppSelector } from "store/store";

import SignButton from "../../../UI/SignButton/SignButton";
import styles from "./SignPanel.module.scss";

export type ISign = "/" | "x" | "-" | "+";

const signs: ISign[] = ["/", "x", "-", "+"];

interface SignPanelProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const SignPanel = memo(
  ({ isDraggable = false, isCanHide = false }: SignPanelProps) => {
    const dispatch = useAppDispatch();
    const { drag, styleMode } = useDragND("Signs", isDraggable, isCanHide);
    const { mode } = useAppSelector((state) => state.mode);

    const addOperationMemo = useCallback((e: React.MouseEvent) => {
      const button = e.target as HTMLButtonElement;
      dispatch(setOperation(button.name));
    }, []);

    return (
      <div
        className={styles[`component${styleMode}`]}
        ref={isDraggable ? drag : undefined}
      >
        {signs.map((sign) => (
          <SignButton
            sign={sign}
            key={sign}
            onClick={addOperationMemo}
            isDisabled={mode === "Constructor"}
          />
        ))}
      </div>
    );
  }
);

export default SignPanel;
