import { useAppSelector } from "store/store";

import styles from "./Calculator.module.scss";
import ConstructorCalculator from "./ConstructorCalculator/ConstructorCalculator";
import DisplayCalculator from "./DisplayCalculator/DisplayCalculator";
import EmptyCalculator from "./EmptyCalculator/EmptyCalculator";

const Calculator = () => {
  const { specification } = useAppSelector((state) => state.calculator);
  const { mode } = useAppSelector((state) => state.mode);

  return (
    <div className={styles.component}>
      {mode === "Constructor" && specification.length === 0 && (
        <EmptyCalculator />
      )}
      {mode === "Constructor" && specification.length !== 0 && (
        <ConstructorCalculator />
      )}

      {mode === "Runtime" && <DisplayCalculator />}
    </div>
  );
};

export default Calculator;
