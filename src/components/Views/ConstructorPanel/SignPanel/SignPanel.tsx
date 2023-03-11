import useDragND from 'hooks/useDragND';

import SignButton from '../../../UI/SignButton/SignButton';
import styles from './SignPanel.module.scss';

const signs = ["/", "x", "-", "+"];

interface SignPanelProps {
  isDraggable?: boolean;
}

const SignPanel = ({ isDraggable = false }: SignPanelProps) => {
  const { drag, styleMode } = useDragND("Signs", isDraggable);
  return (
    <div
      className={styles[`component${styleMode}`]}
      ref={isDraggable ? drag : undefined}
    >
      {signs.map((sign) => (
        <SignButton sign={sign} key={sign} />
      ))}
    </div>
  );
};

export default SignPanel;
