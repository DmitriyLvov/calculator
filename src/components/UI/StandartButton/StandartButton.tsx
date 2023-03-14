import { memo } from "react";

import styles from "./StandartButton.module.scss";

interface StandartButtonProps {
  text: string;
  onClick: (e: React.MouseEvent) => void;
  isDisabled?: boolean;
  color: "primary" | "secondary";
}

const StandartButton = memo(
  ({ text, onClick, isDisabled = true, color }: StandartButtonProps) => {
    return (
      <button
        name={text}
        className={
          isDisabled
            ? `${styles[`component_${color}`]} ${styles.disabled}`
            : styles[`component_${color}`]
        }
        onClick={onClick}
        disabled={isDisabled}
      >
        {text}
      </button>
    );
  }
);

export default StandartButton;
