import { memo } from "react";
import { ConnectDragPreview, ConnectDragSource } from "react-dnd";
import { useAppSelector } from "store/store";

import styles from "./DigitDisplay.module.scss";

interface DigitDisplayProps {
  styleMode?: string;
  drag?: ConnectDragSource | ConnectDragPreview;
}

const DigitDisplay = memo(({ drag, styleMode }: DigitDisplayProps) => {
  const { displayNumber } = useAppSelector((state) => state.calculator);

  return (
    <div
      className={styles[styleMode ? styleMode : "component"]}
      ref={drag ? drag : undefined}
    >
      <p
        className={
          displayNumber.length < 9
            ? styles.display_large
            : displayNumber.length < 13
            ? styles.display_medium
            : styles.display_small
        }
      >
        {displayNumber}
      </p>
    </div>
  );
});

export default DigitDisplay;
