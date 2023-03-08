import { Button } from 'antd';

import styles from './NumberButton.module.scss';

interface INumberButtonProps {
  number: string;
  module: number;
}

const NumberButton = ({ number, module }: INumberButtonProps) => {
  const width = `${(module - 1) * 8 + module * 72}px`;

  return (
    <div>
      <Button className={styles.component} style={{ width }}>
        {number}
      </Button>
    </div>
  );
};

export default NumberButton;
