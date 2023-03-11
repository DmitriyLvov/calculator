import { useAppSelector } from 'app/store';
import useDragND from 'hooks/useDragND';

import styles from './DigitDisplay.module.scss';

interface DigitDisplayProps {
  isDraggable?: boolean;
}

const DigitDisplay = ({ isDraggable = false }: DigitDisplayProps) => {
  const { drag, isDragging, styleMode } = useDragND("Display", isDraggable);
  const { display } = useAppSelector((state) => state.calculator);

  return (
    <div
      className={styles[`component${styleMode}`]}
      ref={isDraggable ? drag : undefined}
    >
      <p className={styles.display}>{display.toString().}</p>
    </div>
  );
};

export default DigitDisplay;
