import { Button } from 'antd';
import { useAppDispatch } from 'app/store';
import useCalcOperations from 'hooks/useCalcOperations';

import styles from './NumberButton.module.scss';

interface INumberButtonProps {
  number: string;
  module: number;
}

const NumberButton = ({ number, module }: INumberButtonProps) => {
  const width = `${(module - 1) * 8 + module * 72}px`;

  const { addDigit } = useCalcOperations();

  const clickHandler = () => {
    addDigit(number);
  };

  return (
    <div>
      <Button
        className={styles.component}
        style={{ width }}
        onClick={clickHandler}
      >
        {number}
      </Button>
    </div>
  );
};

export default NumberButton;
