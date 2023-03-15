import { memo } from "react";
import { ConnectDragSource } from "react-dnd";

import NumberButton from "../NumberButton/NumberButton";
import styles from "./NumberPanel.module.scss";

interface NumberPanelProps {
  isDisabled?: boolean;
  styleClass?: string;
  drag?: ConnectDragSource;
}

const numbers = [
  { number: "9", module: 1 },
  { number: "8", module: 1 },
  { number: "7", module: 1 },
  { number: "6", module: 1 },
  { number: "5", module: 1 },
  { number: "4", module: 1 },
  { number: "3", module: 1 },
  { number: "2", module: 1 },
  { number: "1", module: 1 },
  { number: ",", module: 1 },
  { number: "0", module: 2 },
];

const NumberPanel = memo(
  ({ drag, isDisabled = false, styleClass }: NumberPanelProps) => {
    return (
      <div
        className={styles[styleClass ? styleClass : "component"]}
        ref={drag ? drag : undefined}
      >
        {numbers.map(({ number, module }) => (
          <NumberButton
            key={number}
            number={number}
            module={module}
            isDisabled={isDisabled}
          />
        ))}
      </div>
    );
  }
);

export default NumberPanel;
