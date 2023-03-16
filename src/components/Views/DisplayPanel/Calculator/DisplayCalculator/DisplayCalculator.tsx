import DigitDisplay from "components/business/DigitDisplay/DigitDisplay";
import EqualButton from "components/business/EqualButton/EqualButton";
import NumberPanel from "components/business/NumberPanel/NumberPanel";
import SignPanel from "components/business/SignPanel/SignPanel";
import { CalcComponentType } from "components/Views/ConstructorPanel/ConstructorPanel";
import useHotKeys from "hooks/useHotKeys";
import React, { useEffect } from "react";
import { useAppSelector } from "store/store";

import styles from "../ConstructorCalculator/ConstructorCalculator.module.scss";

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
  const { specification } = useAppSelector((state) => state.mode);

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
      {specification.map((component) => (
        <div key={component}>{modules[component]}</div>
      ))}
    </div>
  );
};

export default DisplayCalculator;
