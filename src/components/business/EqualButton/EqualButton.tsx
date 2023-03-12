import { useAppSelector } from 'app/store';
import StandartButton from 'components/UI/StandartButton/StandartButton';
import useCalcOperations from 'hooks/useCalcOperations';
import useDragND from 'hooks/useDragND';

import styles from './EqualButton.module.scss';

interface EqualButtonProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const EqualButton = ({
  isDraggable = false,
  isCanHide = false,
}: EqualButtonProps) => {
  const { drag, styleMode } = useDragND("Equal", isDraggable, isCanHide);
  const { equalOperation } = useCalcOperations();
  const { mode } = useAppSelector((state) => state.calculator);

  return (
    <div
      className={styles[`component${styleMode}`]}
      ref={isDraggable ? drag : undefined}
    >
      <StandartButton
        text="="
        onClick={equalOperation}
        color="primary"
        isDisabled={mode === "Constructor"}
      />
    </div>
  );
};

export default EqualButton;
