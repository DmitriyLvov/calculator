import { useAppSelector } from 'app/store';
import { CalcComponentType } from 'components/Views/ConstructorPanel/ConstructorPanel';
import { useDrag } from 'react-dnd';

const useDragND = (type: CalcComponentType, isDraggable: boolean) => {
  const { specification, mode } = useAppSelector((state) => state.calculator);

  const [{ isDragging }, drag] = useDrag(() => ({
    item: { type },
    type: "calc",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.8 : 1,
    }),
  }));

  const isCreated = specification.indexOf(type) > -1;

  let styleMode;
  // Если компонент перемещается
  if (isDragging) {
    styleMode = "_dragging";
  }
  // Если компонент создан и находится на панели слева (не доступен, т.к. уже создан)
  else if (isCreated && isDraggable) {
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
