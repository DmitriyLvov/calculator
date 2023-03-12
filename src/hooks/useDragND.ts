import { useAppSelector } from 'app/store';
import { CalcComponentType } from 'components/Views/ConstructorPanel/ConstructorPanel';
import { useDrag } from 'react-dnd';

const useDragND = (
  type: CalcComponentType,
  isDraggable: boolean,
  isCanHide: boolean
) => {
  const { specification, mode } = useAppSelector((state) => state.calculator);

  const currentIndex = specification.findIndex((item) => item === type);
  const isCreated = currentIndex > -1;

  const [{ isDragging }, drag] = useDrag(() => ({
    item: { type, index: currentIndex },
    type: "calc",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.8 : 1,
    }),
  }));

  let styleMode;

  // Если компонент создан и находится на панели слева (не доступен, т.к. уже создан)
  if (isCanHide && isCreated) {
    styleMode = "_created";
  }
  // Если комонент в режиме конструктора и находится на панели слева (доступен к перемещению)
  else if (mode === "Constructor" && isDraggable) {
    styleMode = "_inactive";
  }
  // Для остальных случаях обычное отображение компонента
  else {
    styleMode = "";
  }

  return { isDragging, drag, styleMode };
};

export default useDragND;
