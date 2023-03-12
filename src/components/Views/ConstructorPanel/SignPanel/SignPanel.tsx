import { useAppSelector } from 'app/store';
import useCalcOperations from 'hooks/useCalcOperations';
import useDragND from 'hooks/useDragND';

import SignButton from '../../../UI/SignButton/SignButton';
import styles from './SignPanel.module.scss';

export type ISign = "/" | "x" | "-" | "+";

const signs: ISign[] = ["/", "x", "-", "+"];

interface SignPanelProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const SignPanel = ({
  isDraggable = false,
  isCanHide = false,
}: SignPanelProps) => {
  const { drag, styleMode } = useDragND("Signs", isDraggable, isCanHide);
  const { addOperation } = useCalcOperations();
  const { mode } = useAppSelector((state) => state.calculator);

  return (
    <div
      className={styles[`component${styleMode}`]}
      ref={isDraggable ? drag : undefined}
    >
      {signs.map((sign) => (
        <SignButton
          sign={sign}
          key={sign}
          onClick={() => addOperation(sign)}
          isDisabled={mode === "Constructor"}
        />
      ))}
    </div>
  );
};

export default SignPanel;
