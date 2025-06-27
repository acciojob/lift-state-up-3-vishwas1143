import React from "react";

const ChildComponent1 = ({ onSelect }) => {
  return (
    <div className="child1">
      <h2>Child Copmponent 1</h2>
      <button onClick={() => onSelect("Option 1")}>Option1 </button>
    </div>
  );
};

export default ChildComponent1;
