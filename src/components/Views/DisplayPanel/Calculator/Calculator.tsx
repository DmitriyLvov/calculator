import { useAppSelector } from 'app/store';

import styles from './Calculator.module.scss';
import ConstructorCalc from './ConstructorCalc/ConstructorCalc';
import EmptyCalc from './EmptyCalc/EmptyCalc';

const Calculator = () => {
  const { specification } = useAppSelector((state) => state.calculator);
  return (
    <div className={styles.component}>
      {specification.length === 0 ? <EmptyCalc /> : <ConstructorCalc />}
    </div>
  );
};

export default Calculator;
