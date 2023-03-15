import DigitDisplay from "components/business/DigitDisplay/DigitDisplay";
import useDragND from "hooks/useDragND";
import { memo } from "react";

interface MovableDigitDisplayProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const MovableDigitDisplay = memo(
  ({ isDraggable = false, isCanHide = false }: MovableDigitDisplayProps) => {
    const { styleMode, drag } = useDragND("Display", isDraggable, isCanHide);

    return (
      <div>
        <DigitDisplay
          drag={isDraggable ? drag : undefined}
          styleMode={`component${styleMode}`}
        />
      </div>
    );
  }
);

export default MovableDigitDisplay;
