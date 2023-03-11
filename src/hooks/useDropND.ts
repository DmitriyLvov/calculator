import { useAppDispatch } from 'app/store';
import { useDrop } from 'react-dnd';
import { changeSpecificaion } from 'slices/CalculatorSlice';

const useDropND = (index: number) => {
  const dispatch = useAppDispatch();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "calc",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop(item: any, monitor) {
      dispatch(
        changeSpecificaion({ index, type: item.type, operation: "add" })
      );
    },
  }));
  return { isOver, drop };
};

export default useDropND;
