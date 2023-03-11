import DigitDisplay from '../../UI/DigitDisplay/DigitDisplay';
import EqualButton from '../../UI/EqualButton/EqualButton';
import styles from './ConstructorPanel.module.scss';
import NumberPanel from './NumberPanel/NumberPanel';
import SignPanel from './SignPanel/SignPanel';

export type CalcComponentType = "Display" | "Numbers" | "Signs" | "Equal";

const ConstructorPanel = () => {
  return (
    <div className={styles.component}>
      <div className={styles.panel}>
        <DigitDisplay isDraggable={true} />
        <SignPanel isDraggable={true} />
        <NumberPanel isDraggable={true} />
        <EqualButton isDraggable={true} />
      </div>
    </div>
  );
};

export default ConstructorPanel;
