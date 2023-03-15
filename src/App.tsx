import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "./App.module.scss";
import ConstructorPanel from "./components/Views/ConstructorPanel/ConstructorPanel";
import DisplayPanel from "./components/Views/DisplayPanel/DisplayPanel";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.app}>
        <ConstructorPanel />
        <DisplayPanel />
      </div>
    </DndProvider>
  );
}

export default App;
