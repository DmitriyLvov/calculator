import useDragND from "hooks/useDragND";

import EqualButton from "../../EqualButton/EqualButton";

interface MovableEqualButtonProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const MovableEqualButton = ({
  isDraggable = false,
  isCanHide = false,
}: MovableEqualButtonProps) => {
  const { drag, styleMode } = useDragND("Equal", isDraggable, isCanHide);

  return (
    <EqualButton
      drag={isDraggable ? drag : undefined}
      styleClass={`component${styleMode}`}
      isDisabled={true}
    />
  );
};
export default MovableEqualButton;
