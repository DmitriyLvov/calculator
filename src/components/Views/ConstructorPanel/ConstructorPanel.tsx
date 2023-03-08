import DigitDisplay from '../../UI/DigitDisplay/DigitDisplay';
import styles from './ConstructorPanel.module.scss';
import NumberPanel from './NumberPanel/NumberPanel';
import SignPanel from './SignPanel/SignPanel';

const ConstructorPanel = () => {
  return (
    <div className={styles.component}>
      <div className={styles.panel}>
        <DigitDisplay />
        <SignPanel />
        <NumberPanel />
      </div>
    </div>
  );
};

export default ConstructorPanel;
