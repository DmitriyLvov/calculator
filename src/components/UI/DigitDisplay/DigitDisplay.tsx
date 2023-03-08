import { Input } from 'antd';

import styles from './DigitDisplay.module.scss';

const DigitDisplay = () => {
  return (
    <div className={styles.component}>
      <Input className={styles.input} defaultValue='0' />
    </div>
  );
};

export default DigitDisplay;
