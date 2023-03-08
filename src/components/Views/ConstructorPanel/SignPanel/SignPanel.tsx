import SignButton from '../../../UI/SignButton/SignButton';
import styles from './SignPanel.module.scss';

const signs = ['/', 'x', '-', '+'];

const SignPanel = () => {
  return (
    <div className={styles.component}>
      {signs.map((sign) => (
        <SignButton sign={sign} key={sign} />
      ))}
    </div>
  );
};

export default SignPanel;
