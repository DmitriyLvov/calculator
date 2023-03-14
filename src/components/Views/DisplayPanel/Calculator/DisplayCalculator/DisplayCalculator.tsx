import DigitDisplay from "components/business/DigitDisplay/DigitDisplay";
import EqualButton from "components/business/EqualButton/EqualButton";
import { CalcComponentType } from "components/Views/ConstructorPanel/ConstructorPanel";
import NumberPanel from "components/Views/ConstructorPanel/NumberPanel/NumberPanel";
import SignPanel from "components/Views/ConstructorPanel/SignPanel/SignPanel";
import useHotKeys from "hooks/useHotKeys";
import React, { useEffect } from "react";
import { useAppSelector } from "store/store";

import styles from "../ConstructorCalculator/ConstructorCalculator.module.scss";
import DragElement from "../ConstructorCalculator/DragElement/DragElement";

type IModule = {
  [key in CalcComponentType]: React.ReactElement;
};

const modules: IModule = {
  Display: <DigitDisplay />,
  Numbers: <NumberPanel />,
  Signs: <SignPanel />,
  Equal: <EqualButton />,
};

const DisplayCalculator = () => {
  const { specification } = useAppSelector((state) => state.calculator);

  const keyExecute = useHotKeys();

  const keyHandler = (e: KeyboardEvent) => {
    e.preventDefault();
    keyExecute(e.key);
  };

  useEffect(() => {
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  return (
    <div className={styles.component}>
      {specification.map((component, index) => (
        <DragElement key={index} index={index}>
          {modules[component]}
        </DragElement>
      ))}
      <DragElement
        key={specification.length}
        index={specification.length}
        isLast={true}
      />
    </div>
  );
};

export default DisplayCalculator;
