import { CalcComponentType } from "components/Views/ConstructorPanel/ConstructorPanel";
import { useDrag } from "react-dnd";
import { useAppSelector } from "store/store";

const useDragND = (
  type: CalcComponentType,
  isDraggable: boolean,
  isCanHide: boolean
) => {
  const { specification } = useAppSelector((state) => state.calculator);
  const { mode } = useAppSelector((state) => state.mode);

  // Если элемент может скрываться (находится на панели слева), то индекс всегда будет "-1"
  const currentIndex = isCanHide
    ? -1
    : specification.findIndex((item) => item === type);
  // Определяем, создан ли элемент
  const isCreated = specification.findIndex((item) => item === type) > -1;

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
    styleMode = isCreated ? "_active" : "_inactive";
  }
  // Для остальных случаях обычное отображение компонента
  else {
    styleMode = "";
  }

  return { isDragging, drag, styleMode };
};

export default useDragND;
