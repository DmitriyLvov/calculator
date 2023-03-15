import { memo, useCallback } from "react";
import { ConnectDragSource } from "react-dnd";
import { setOperation } from "slices/CalculatorSlice";
import { useAppDispatch } from "store/store";

import SignButton from "../../UI/SignButton/SignButton";
import styles from "./SignPanel.module.scss";

export type ISign = "/" | "x" | "-" | "+";

const signs: ISign[] = ["/", "x", "-", "+"];

interface SignPanelProps {
  isDisabled?: boolean;
  drag?: ConnectDragSource;
  styleMode?: string;
}

const SignPanel = memo(
  ({ isDisabled = false, styleMode, drag }: SignPanelProps) => {
    const dispatch = useAppDispatch();

    const addOperation = useCallback((e: React.MouseEvent) => {
      const button = e.target as HTMLButtonElement;
      dispatch(setOperation(button.name));
    }, []);

    return (
      <div
        className={styles[styleMode ? styleMode : "component"]}
        ref={drag ? drag : undefined}
      >
        {signs.map((sign) => (
          <SignButton
            sign={sign}
            key={sign}
            onClick={addOperation}
            isDisabled={isDisabled}
          />
        ))}
      </div>
    );
  }
);

export default SignPanel;
