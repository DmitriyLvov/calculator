import { Button } from 'antd';
import useDragND from 'hooks/useDragND';

import styles from './EqualButton.module.scss';

interface EqualButtonProps {
  isDraggable?: boolean;
}

const EqualButton = ({ isDraggable = false }: EqualButtonProps) => {
  const { drag, styleMode } = useDragND("Equal", isDraggable);
  return (
    <div
      className={styles[`component${styleMode}`]}
      ref={isDraggable ? drag : undefined}
    >
      <Button className={styles[`button${styleMode}`]}>=</Button>
    </div>
  );
};

export default EqualButton;
