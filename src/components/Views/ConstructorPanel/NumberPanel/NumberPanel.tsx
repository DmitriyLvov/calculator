import NumberButton from '../../../UI/NumberButton/NumberButton';
import styles from './NumberPanel.module.scss';

const numbers = [
  { number: '9', module: 1 },
  { number: '8', module: 1 },
  { number: '7', module: 1 },
  { number: '6', module: 1 },
  { number: '5', module: 1 },
  { number: '4', module: 1 },
  { number: '3', module: 1 },
  { number: '2', module: 1 },
  { number: '1', module: 1 },
  { number: ',', module: 1 },
  { number: '0', module: 2 },
];

const NumberPanel = () => {
  return (
    <div className={styles.component}>
      {numbers.map(({ number, module }) => (
        <NumberButton number={number} module={module} />
      ))}
    </div>
  );
};

export default NumberPanel;
