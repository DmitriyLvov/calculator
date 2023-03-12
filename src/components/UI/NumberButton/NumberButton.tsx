import useCalcOperations from 'hooks/useCalcOperations';

import StandartButton from '../StandartButton/StandartButton';
import styles from './NumberButton.module.scss';

interface INumberButtonProps {
  number: string;
  module: number;
  isDisabled?: boolean;
}

const NumberButton = ({
  number,
  module,
  isDisabled = true,
}: INumberButtonProps) => {
  const width = `${(module - 1) * 8 + module * 72}px`;

  const { addDigit } = useCalcOperations();

  const clickHandler = () => {
    addDigit(number);
  };

  return (
    <div className={styles.component} style={{ width }}>
      <StandartButton
        text={number}
        onClick={clickHandler}
        color="secondary"
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default NumberButton;
