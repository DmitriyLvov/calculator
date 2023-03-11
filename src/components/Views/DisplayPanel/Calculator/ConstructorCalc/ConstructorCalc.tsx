import { useAppSelector } from 'app/store';
import DigitDisplay from 'components/UI/DigitDisplay/DigitDisplay';
import EqualButton from 'components/UI/EqualButton/EqualButton';
import { CalcComponentType } from 'components/Views/ConstructorPanel/ConstructorPanel';
import NumberPanel from 'components/Views/ConstructorPanel/NumberPanel/NumberPanel';
import SignPanel from 'components/Views/ConstructorPanel/SignPanel/SignPanel';
import React from 'react';

import styles from './ConstructorCalc.module.scss';
import Divider from './Divider/Divider';

type IModule = {
  [key in CalcComponentType]: React.ReactElement;
};

const modules: IModule = {
  Display: <DigitDisplay />,
  Numbers: <NumberPanel />,
  Signs: <SignPanel />,
  Equal: <EqualButton />,
};

const ConstructorCalc = () => {
  const { specification } = useAppSelector((state) => state.calculator);

  return (
    <div className={styles.component}>
      {specification.map((component, index) => (
        <div
          className={styles.constructorArea}
          key={`${component}_constructor`}
        >
          {index === 0 && <Divider height="4px" index={index} />}
          {modules[component]}
          <Divider
            height={specification.length - index === 1 ? "100px" : "8px"}
            index={index + 1}
          />
        </div>
      ))}
    </div>
  );
};

export default ConstructorCalc;
