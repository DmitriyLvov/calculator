import DigitDisplay from "components/business/DigitDisplay/DigitDisplay";
import EqualButton from "components/business/EqualButton/EqualButton";
import { CalcComponentType } from "components/Views/ConstructorPanel/ConstructorPanel";
import NumberPanel from "components/Views/ConstructorPanel/NumberPanel/NumberPanel";
import SignPanel from "components/Views/ConstructorPanel/SignPanel/SignPanel";
import React from "react";
import { useAppSelector } from "store/store";

import styles from "./ConstructorCalculator.module.scss";
import DragElement from "./DragElement/DragElement";

type IModule = {
  [key in CalcComponentType]: React.ReactElement;
};

const modules: IModule = {
  Display: <DigitDisplay isDraggable={false} />,
  Numbers: <NumberPanel isDraggable={true} />,
  Signs: <SignPanel isDraggable={true} />,
  Equal: <EqualButton isDraggable={true} />,
};

const ConstructorCalculator = () => {
  const { specification } = useAppSelector((state) => state.calculator);

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

export default ConstructorCalculator;
