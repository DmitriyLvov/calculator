import { useAppSelector } from "app/store";
import DigitDisplay from "components/business/DigitDisplay/DigitDisplay";
import EqualButton from "components/business/EqualButton/EqualButton";
import { CalcComponentType } from "components/Views/ConstructorPanel/ConstructorPanel";
import NumberPanel from "components/Views/ConstructorPanel/NumberPanel/NumberPanel";
import SignPanel from "components/Views/ConstructorPanel/SignPanel/SignPanel";
import React from "react";

import CalcElement from "./CalcElement/CalcElement";
import styles from "./ConstructorCalc.module.scss";

type IModule = {
  [key in CalcComponentType]: React.ReactElement;
};

const modules: IModule = {
  Display: <DigitDisplay isDraggable={false} />,
  Numbers: <NumberPanel isDraggable={true} />,
  Signs: <SignPanel isDraggable={true} />,
  Equal: <EqualButton isDraggable={true} />,
};

const ConstructorCalc = () => {
  const { specification } = useAppSelector((state) => state.calculator);

  return (
    <div className={styles.component}>
      {specification.map((component, index) => (
        <CalcElement key={index} index={index}>
          {modules[component]}
        </CalcElement>
      ))}
      <CalcElement
        key={specification.length}
        index={specification.length}
        isLast={true}
      />
    </div>
  );
};

export default ConstructorCalc;
