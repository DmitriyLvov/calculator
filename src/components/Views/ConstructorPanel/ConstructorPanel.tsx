import { useAppSelector } from "store/store";

import DigitDisplay from "../../business/DigitDisplay/DigitDisplay";
import EqualButton from "../../business/EqualButton/EqualButton";
import styles from "./ConstructorPanel.module.scss";
import NumberPanel from "./NumberPanel/NumberPanel";
import SignPanel from "./SignPanel/SignPanel";

export type CalcComponentType = "Display" | "Numbers" | "Signs" | "Equal";

const ConstructorPanel = () => {
  const { specification } = useAppSelector((state) => state.calculator);
  const { mode } = useAppSelector((state) => state.mode);

  return (
    <div className={styles.component}>
      {mode === "Constructor" && (
        <div className={styles.panel}>
          <DigitDisplay
            isDraggable={specification.indexOf("Display") === -1}
            isCanHide={true}
          />
          <SignPanel
            isDraggable={specification.indexOf("Signs") === -1}
            isCanHide={true}
          />
          <NumberPanel
            isDraggable={specification.indexOf("Numbers") === -1}
            isCanHide={true}
          />
          <EqualButton
            isDraggable={specification.indexOf("Equal") === -1}
            isCanHide={true}
          />
        </div>
      )}
    </div>
  );
};

export default ConstructorPanel;
