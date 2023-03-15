import { ISign } from "components/business/SignPanel/SignPanel";
import { memo } from "react";

import StandartButton from "../StandartButton/StandartButton";
import styles from "./SignButton.module.scss";

interface ISignButtonProps {
  sign: ISign;
  onClick: (e: React.MouseEvent) => void;
  isDisabled?: boolean;
}

const SignButton = memo(
  ({ sign, onClick, isDisabled = true }: ISignButtonProps) => {
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
  }
);

export default SignButton;
