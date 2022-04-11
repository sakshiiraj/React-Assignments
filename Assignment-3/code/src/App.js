import React from "react";
import "./App.css";
import Employee from "./Employee";

function App({ employee }) {
  return (
    <div className="App">
      <Employee employee={employee} />
    </div>
  );
}

export default App;
