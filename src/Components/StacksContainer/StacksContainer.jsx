import "./StacksContainer.css";
import { useEffect, useState } from "react";

const StacksContainer = ({ array, currentIndices }) => {
  const [stackHeights, setStackHeights] = useState([]);

  // uppdaterar stack heights när array proppen ändras
  useEffect(() => {
    setStackHeights(array);
  }, [array]);

  // Renderar stacks:en och färgar de aktuella indexen röda
  const renderStacks = () => {
    return stackHeights.map((height, i) => (
      <div
        key={i}
        className={`stack ${currentIndices.includes(i) ? "red" : ""}`}
        style={{ height: `${height}%` }}
      ></div>
    ));
  };

  return <div id="stacks-container">{renderStacks()}</div>;
};

export default StacksContainer;
