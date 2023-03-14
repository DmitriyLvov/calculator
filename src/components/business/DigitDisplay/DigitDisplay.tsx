import useDragND from "hooks/useDragND";
import { memo } from "react";
import { useAppSelector } from "store/store";

import styles from "./DigitDisplay.module.scss";

interface DigitDisplayProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const DigitDisplay = memo(
  ({ isDraggable = false, isCanHide = false }: DigitDisplayProps) => {
    const { drag, styleMode } = useDragND("Display", isDraggable, isCanHide);
    const { displayNumber } = useAppSelector((state) => state.calculator);

    return (
      <div
        className={styles[`component${styleMode}`]}
        ref={isDraggable ? drag : undefined}
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
  }
);

export default DigitDisplay;
