import styles from "./IconLabel.module.scss";

interface IconLabelProps {
  activeIcon: string;
  inactiveIcon: string;
  text: string;
  isActive: boolean;
  onClick: (text: string) => void;
}

const IconLabel = ({
  activeIcon,
  inactiveIcon,
  text,
  isActive,
  onClick,
}: IconLabelProps) => {
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick(text);
  };

  return (
    <div
      className={isActive ? styles.component_active : styles.component}
      onClick={onClickHandler}
    >
      <img
        className={styles.icon}
        src={isActive ? activeIcon : inactiveIcon}
        alt="icon"
      />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default IconLabel;
