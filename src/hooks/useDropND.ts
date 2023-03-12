import { useAppDispatch } from 'app/store';
import { useDrop } from 'react-dnd';
import { changeSpecificaion } from 'slices/CalculatorSlice';

interface DropItem {
  type: string;
  index: number;
}

const useDropND = (index: number) => {
  const dispatch = useAppDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "calc",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop(item) {
      const { type, index: currentIndex } = item as DropItem;
      if (type && currentIndex) {
        dispatch(
          changeSpecificaion({
            index,
            type,
            operation: "addElement",
            currentIndex,
          })
        );
      }
    },
  }));
  return { isOver, drop };
};

export default useDropND;
