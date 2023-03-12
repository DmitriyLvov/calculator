import styles from './IconLabel.module.scss';

interface IconLabelProps {
  activeIcon: string;
  inactiveIcon: string;
  text: string;
  isActive: boolean;
}

const IconLabel = ({
  activeIcon,
  inactiveIcon,
  text,
  isActive,
}: IconLabelProps) => {
  return (
    <div className={isActive ? styles.component_active : styles.component}>
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
