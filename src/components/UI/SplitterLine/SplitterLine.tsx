import styles from './SplitterLine.module.scss';

const SplitterLine = () => {
  return (
    <div className={styles.component}>
      <div className={styles.square_left}></div>
      <div className={styles.line}></div>
      <div className={styles.square_right}></div>
    </div>
  );
};

export default SplitterLine;
