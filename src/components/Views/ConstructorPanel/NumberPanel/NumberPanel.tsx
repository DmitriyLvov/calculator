import useDragND from 'hooks/useDragND';

import NumberButton from '../../../UI/NumberButton/NumberButton';
import styles from './NumberPanel.module.scss';

const numbers = [
  { number: "9", module: 1 },
  { number: "8", module: 1 },
  { number: "7", module: 1 },
  { number: "6", module: 1 },
  { number: "5", module: 1 },
  { number: "4", module: 1 },
  { number: "3", module: 1 },
  { number: "2", module: 1 },
  { number: "1", module: 1 },
  { number: ",", module: 1 },
  { number: "0", module: 2 },
];

interface NumberPanelProps {
  isDraggable?: boolean;
}

const NumberPanel = ({ isDraggable = false }: NumberPanelProps) => {
  const { drag, styleMode } = useDragND("Numbers", isDraggable);
  return (
    <div
      className={styles[`component${styleMode}`]}
      ref={isDraggable ? drag : undefined}
    >
      {numbers.map(({ number, module }) => (
        <NumberButton key={number} number={number} module={module} />
      ))}
    </div>
  );
};

export default NumberPanel;
