import DigitDisplay from 'components/business/DigitDisplay/DigitDisplay';
import display from 'components/icons/dnd/Display.png';
import useDragND from 'hooks/useDragND';
import { memo } from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';

interface MovableDigitDisplayProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const MovableDigitDisplay = memo(
  ({ isDraggable = false, isCanHide = false }: MovableDigitDisplayProps) => {
    const { styleMode, drag, dragPreview } = useDragND(
      "Display",
      isDraggable,
      isCanHide
    );

    return (
      <div>
        <DigitDisplay
          drag={isDraggable ? drag : undefined}
          styleMode={`component${styleMode}`}
        />
        <DragPreviewImage connect={dragPreview} src={display} />
      </div>
    );
  }
);

export default MovableDigitDisplay;
