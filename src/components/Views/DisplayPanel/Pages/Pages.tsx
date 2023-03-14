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

  const selectHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      const p = e.target as HTMLDivElement;
      if (p.innerText !== mode) {
        dispatch(setMode(p.innerText));
        dispatch(resetData());
      }
    },
    [mode]
  );

  return (
    <div className={styles.component}>
      {pages.map(({ title, activeIcon, inactiveIcon }) => (
        <div className={styles.pageWrapper} onClick={selectHandler} key={title}>
          <IconLabel
            text={title}
            activeIcon={activeIcon}
            inactiveIcon={inactiveIcon}
            isActive={title === mode}
          />
        </div>
      ))}
    </div>
  );
};

export default Pages;
