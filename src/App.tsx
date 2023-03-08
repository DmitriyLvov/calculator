import { Counter } from './features/counter/Counter';
import styles from './App.module.scss';
import ConstructorPanel from './components/Views/ConstructorPanel/ConstructorPanel';
import DisplayPanel from './components/Views/DisplayPanel/DisplayPanel';

function App() {
  return (
    <div className={styles.app}>
      {/* <Counter /> */}
      <ConstructorPanel />
      <DisplayPanel />
    </div>
  );
}

export default App;
