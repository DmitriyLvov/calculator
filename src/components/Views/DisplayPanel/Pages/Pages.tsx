import activeEye from "components/icons/svg/eye-active.svg";
import inactiveEye from "components/icons/svg/eye-inactive.svg";
import activeSelector from "components/icons/svg/selector-active.svg";
import inactiveSelector from "components/icons/svg/selector-inactive.svg";
import { useCallback } from "react";
import { resetData } from "slices/CalculatorSlice";
import { setMode } from "slices/ModeSlice";
import { useAppDispatch, useAppSelector } from "store/store";

import IconLabel from "../../../UI/IconLabel/IconLabel";
import styles from "./Pages.module.scss";

interface IPage {
  title: string;
  activeIcon: string;
  inactiveIcon: string;
}

const pages: IPage[] = [
  { title: "Runtime", activeIcon: activeEye, inactiveIcon: inactiveEye },
  {
    title: "Constructor",
    activeIcon: activeSelector,
    inactiveIcon: inactiveSelector,
  },
];

const Pages = () => {
  const { mode } = useAppSelector((state) => state.mode);
  const dispatch = useAppDispatch();

  const selectHandler = (text: string) => {
    console.log(text);
    if (["Runtime", "Constructor"].indexOf(text) > -1 && text !== mode) {
      dispatch(setMode(text));
      dispatch(resetData());
    }
  };

  return (
    <div className={styles.component}>
      {pages.map(({ title, activeIcon, inactiveIcon }) => (
        <div className={styles.pageWrapper} key={title}>
          <IconLabel
            text={title}
            activeIcon={activeIcon}
            inactiveIcon={inactiveIcon}
            isActive={title === mode}
            onClick={selectHandler}
          />
        </div>
      ))}
    </div>
  );
};

export default Pages;
