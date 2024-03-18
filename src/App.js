import "./App.css";
import { useState } from "react";
import ArrowCordinate from "./ArrowCoordinate";

function App() {
  const [visible, setVisible] = useState(true);

  function hide() {
    setVisible(false);
  }

  return (
    <div>
      {visible ? <ArrowCordinate /> : <p>hidden coordinates</p>}
      <button onClick={hide}>Hide</button>
    </div>
  );
}

export default App;
