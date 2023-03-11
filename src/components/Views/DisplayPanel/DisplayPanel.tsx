import Calculator from './Calculator/Calculator';
import styles from './DisplayPanel.module.scss';
import Pages from './Pages/Pages';

const DisplayPanel = () => {
  return (
    <div className={styles.component}>
      <div className={styles.panel}>
        <Pages />
        <Calculator />
      </div>
    </div>
  );
};

export default DisplayPanel;
