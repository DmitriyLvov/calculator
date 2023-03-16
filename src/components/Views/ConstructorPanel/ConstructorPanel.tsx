import MovableDigitDisplay from "components/business/Movable/MovableDigitDisplay/MovableDigitDisplay";
import MovableEqualButton from "components/business/Movable/MovableEqualButton/MovableEqualButton";
import MovableSignPanel from "components/business/Movable/MovableSignPanel/MovableSignPanel";
import { memo } from "react";
import { useAppSelector } from "store/store";

import MovableNumberPanel from "../../business/Movable/MovableNumberPanel/MovableNumberPanel";
import styles from "./ConstructorPanel.module.scss";

export type CalcComponentType = "Display" | "Numbers" | "Signs" | "Equal";

const ConstructorPanel = memo(() => {
  const { mode, specification } = useAppSelector((state) => state.mode);

  return (
    <div className={styles.component}>
      {mode === "Constructor" && (
        <div className={styles.panel}>
          <MovableDigitDisplay
            isDraggable={specification.indexOf("Display") === -1}
            isCanHide={true}
          />
          <MovableSignPanel
            isDraggable={specification.indexOf("Signs") === -1}
            isCanHide={true}
          />
          <MovableNumberPanel
            isDraggable={specification.indexOf("Numbers") === -1}
            isCanHide={true}
          />
          <MovableEqualButton
            isDraggable={specification.indexOf("Equal") === -1}
            isCanHide={true}
          />
        </div>
      )}
    </div>
  );
});

export default ConstructorPanel;
