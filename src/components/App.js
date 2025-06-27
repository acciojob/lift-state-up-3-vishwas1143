import React, { useState } from "react";
import "./../styles/App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import "./style.css";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="parent">
      <h1>Parent Copmponent</h1>

      <ChildComponent1 onSelect={setSelectedOption} />
      <ChildComponent2 onSelect={setSelectedOption} />
      <p>Selected Option : {selectedOption}</p>
    </div>
  );
};

export default App;
