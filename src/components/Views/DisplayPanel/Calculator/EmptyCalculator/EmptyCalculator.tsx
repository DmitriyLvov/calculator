import newIcon from "components/icons/svg/new.svg";
import useDropND from "hooks/useDropND";
import { memo } from "react";

import styles from "./EmptyCalculator.module.scss";

const EmptyCalc = memo(() => {
  const { isOver, drop } = useDropND(0);

  return (
    <div
      className={isOver ? styles.component_dropping : styles.component}
      ref={drop}
    >
      <div className={styles.advice}>
        <img className={styles.icon} src={newIcon} alt="New" />
        <p className={styles.header}>Перетащите сюда</p>
        <p className={styles.description}>Любой элемент из левой панели</p>
      </div>
    </div>
  );
});

export default EmptyCalc;
