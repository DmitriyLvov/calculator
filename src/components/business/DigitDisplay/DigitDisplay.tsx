import { useAppSelector } from "app/store";
import useDragND from "hooks/useDragND";

import styles from "./DigitDisplay.module.scss";

interface DigitDisplayProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const DigitDisplay = ({
  isDraggable = false,
  isCanHide = false,
}: DigitDisplayProps) => {
  const { drag, styleMode } = useDragND("Display", isDraggable, isCanHide);
  const { displayNumber } = useAppSelector((state) => state.calculator);

  return (
    <div
      className={styles[`component${styleMode}`]}
      ref={isDraggable ? drag : undefined}
    >
      <p
        className={
          displayNumber.length < 9 ? styles.display_large : styles.display_small
        }
      >
        {displayNumber}
      </p>
    </div>
  );
};

export default DigitDisplay;
