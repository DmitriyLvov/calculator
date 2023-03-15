import MovableDigitDisplay from "components/business/Movable/MovableDigitDisplay/MovableDigitDisplay";
import MovableEqualButton from "components/business/Movable/MovableEqualButton/MovableEqualButton";
import MovableNumberPanel from "components/business/Movable/MovableNumberPanel/MovableNumberPanel";
import MovableSignPanel from "components/business/Movable/MovableSignPanel/MovableSignPanel";
import { CalcComponentType } from "components/Views/ConstructorPanel/ConstructorPanel";
import React from "react";
import { useAppSelector } from "store/store";

import styles from "./ConstructorCalculator.module.scss";
import DropElement from "./DropElement/DropElement";

type IModule = {
  [key in CalcComponentType]: React.ReactElement;
};

const modules: IModule = {
  Display: <MovableDigitDisplay isDraggable={false} />,
  Numbers: <MovableNumberPanel isDraggable={true} />,
  Signs: <MovableSignPanel isDraggable={true} />,
  Equal: <MovableEqualButton isDraggable={true} />,
};

const ConstructorCalculator = () => {
  const { specification } = useAppSelector((state) => state.calculator);

  return (
    <div className={styles.component}>
      {specification.map((component, index) => (
        <DropElement key={index} index={index}>
          {modules[component]}
        </DropElement>
      ))}
      <DropElement
        key={specification.length}
        index={specification.length}
        isLast={true}
      />
    </div>
  );
};

export default ConstructorCalculator;
