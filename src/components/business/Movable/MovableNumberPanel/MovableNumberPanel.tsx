import useDragND from "hooks/useDragND";
import { memo } from "react";

import NumberPanel from "../../NumberPanel/NumberPanel";

interface MovableNumberPanelProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const MovableNumberPanel = memo(
  ({ isDraggable = false, isCanHide = false }: MovableNumberPanelProps) => {
    const { drag, styleMode } = useDragND("Numbers", isDraggable, isCanHide);
    return (
      <NumberPanel
        drag={isDraggable ? drag : undefined}
        isDisabled={true}
        styleClass={`component${styleMode}`}
      />
    );
  }
);

export default MovableNumberPanel;
