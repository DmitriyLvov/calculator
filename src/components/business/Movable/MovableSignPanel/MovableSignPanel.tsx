import useDragND from 'hooks/useDragND';

import SignPanel from '../../SignPanel/SignPanel';

interface MovableSignPanelProps {
  isDraggable?: boolean;
  isCanHide?: boolean;
}

const MovableSignPanel = ({
  isDraggable = false,
  isCanHide = false,
}: MovableSignPanelProps) => {
  const { drag, styleMode } = useDragND("Signs", isDraggable, isCanHide);

  return (
    <SignPanel
      drag={isDraggable ? drag : undefined}
      styleMode={`component${styleMode}`}
      isDisabled={true}
    />
  );
};
export default MovableSignPanel;
