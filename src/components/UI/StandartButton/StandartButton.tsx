import styles from './StandartButton.module.scss';

interface StandartButtonProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
  color: "primary" | "secondary";
}

const StandartButton = ({
  text,
  onClick,
  isDisabled = true,
  color,
}: StandartButtonProps) => {
  return (
    <button
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
};

export default StandartButton;
