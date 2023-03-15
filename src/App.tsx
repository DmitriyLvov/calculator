import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

import styles from "./App.module.scss";
import ConstructorPanel from "./components/Views/ConstructorPanel/ConstructorPanel";
import DisplayPanel from "./components/Views/DisplayPanel/DisplayPanel";

function App() {
  const touchOptions = {
    enableMouseEvents: true,
  };

  const isTouchDevice = !!(
    "ontouchstart" in window || navigator.maxTouchPoints
  );
  const dndBackend = isTouchDevice ? TouchBackend : HTML5Backend;

  return (
    <DndProvider backend={dndBackend} options={touchOptions}>
      <div className={styles.app}>
        <ConstructorPanel />
        <DisplayPanel />
      </div>
    </DndProvider>
  );
}

export default App;
