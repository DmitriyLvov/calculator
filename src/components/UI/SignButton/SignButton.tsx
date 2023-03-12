import { ISign } from 'components/Views/ConstructorPanel/SignPanel/SignPanel';

import StandartButton from '../StandartButton/StandartButton';
import styles from './SignButton.module.scss';

interface ISignButtonProps {
  sign: ISign;
  onClick: () => void;
  isDisabled?: boolean;
}

const SignButton = ({ sign, onClick, isDisabled = true }: ISignButtonProps) => {
  return (
    <div className={styles.component}>
      <StandartButton
        text={sign}
        onClick={onClick}
        isDisabled={isDisabled}
        color="secondary"
      />
    </div>
  );
};

export default SignButton;
