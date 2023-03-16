import SplitterLine from "components/UI/SplitterLine/SplitterLine";
import useDropND from "hooks/useDropND";
import React from "react";
import { changeSpecificaion } from "slices/ModeSlice";
import { useAppDispatch, useAppSelector } from "store/store";

interface CalcElementProps {
  children?: React.ReactElement;
  index: number;
  isLast?: boolean;
}

const DropElement = ({ children, index, isLast = false }: CalcElementProps) => {
  const { drop, isOver } = useDropND(index);
  const { mode } = useAppSelector((state) => state.mode);
  const dispatch = useAppDispatch();

  const deleteHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (mode === "Constructor") {
      dispatch(changeSpecificaion({ operation: "deleteElement", index }));
    }
  };

  return (
    <div
      ref={drop}
      style={{ height: isLast ? "100%" : "" }}
      onDoubleClick={deleteHandler}
    >
      {isOver && <SplitterLine />}
      {children}
    </div>
  );
};

export default DropElement;
