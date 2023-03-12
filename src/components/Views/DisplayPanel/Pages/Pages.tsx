import { useAppDispatch, useAppSelector } from 'app/store';
import activeEye from 'components/icons/svg/eye-active.svg';
import inactiveEye from 'components/icons/svg/eye-inactive.svg';
import activeSelector from 'components/icons/svg/selector-active.svg';
import inactiveSelector from 'components/icons/svg/selector-inactive.svg';
import { setMode } from 'slices/CalculatorSlice';

import IconLabel from '../../../UI/IconLabel/IconLabel';
import styles from './Pages.module.scss';

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
  const { mode } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const p = e.target as HTMLDivElement;
    console.log(p.innerText);
    if (p.innerText) {
      dispatch(setMode(p.innerText));
    }
  };

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
