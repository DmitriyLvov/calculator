import SplitterLine from 'components/UI/SplitterLine/SplitterLine';
import useDropND from 'hooks/useDropND';

import styles from './Divider.module.scss';

interface DividerProps {
  height: string;
  index: number;
}

const Divider = ({ height, index }: DividerProps) => {
  const { drop, isOver } = useDropND(index);
  return (
    <div ref={drop} className={styles.component} style={{ height }}>
      {isOver && <SplitterLine />}
    </div>
  );
};

export default Divider;
