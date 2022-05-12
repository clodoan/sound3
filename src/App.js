import "./App.css";
import Key from "./Key";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="keyboard">
        <Key note="01" color="green" />
        <Key note="03" color="red" />
        <Key note="05" color="yellow" />
      </div>
    </div>
  );
}

export default App;
