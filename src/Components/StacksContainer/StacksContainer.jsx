import "./StacksContainer.css";
import { useEffect, useState } from "react";
// Funktioner från utils.js
import { generateRandomStackHeights } from "../../utils";

const StacksContainer = ({ array }) => {
  // state variabel som förvarar stack heights
  const [stackHeights, setStackHeights] = useState([]);

  // uppdaterar stack heights när arraySize propen ändras
  useEffect(() => {
    // Genererar ny stack heights array baserad på arraySize
    const newStackHeights = generateRandomStackHeights(array);
    setStackHeights(newStackHeights);
  }, [array]);

  // Logik för att rendera antalet stacks från stackHeights arrayen
  const renderStacks = () => {
    return stackHeights.map((height, i) => (
      <div
        key={i}
        className="stack"
        style={{ height: `${height}%` }}
      ></div>
    ));
  };

  return <div id="stacks-container">{renderStacks()}</div>;
};

export default StacksContainer;
