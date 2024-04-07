import "./StacksContainer.css";
import { useEffect, useState } from "react";

// Funktioner från utils.js
import { shuffleArray } from "../../utils";

const StacksContainer = ({ array }) => {
  // state variabel som förvarar stack heights
  const [stackHeights, setStackHeights] = useState([]);

  // Funktion för att generera en array med olika höjder på stacksen baserat på array, från 1 - array
  const generateRandomStackHeights = (size) => {
    const heights = Array.from({ length: size }, (_, index) => index + 1);
    const shuffledHeights = shuffleArray(heights);
    console.log(shuffledHeights);
    return shuffledHeights;
  };

  // uppdaterar stack heights när array propen ändras
  useEffect(() => {
      const newStackHeights = generateRandomStackHeights(array.length);
      setStackHeights(newStackHeights);
  }, [array]);

  // Logik för att rendera antalet stacks från stackHeights arrayen
  const renderStacks = () => {
    return stackHeights.map((height, i) => (
      <div key={i} className="stack" style={{ height: `${height}%` }}></div>
    ));
  };

  return <div id="stacks-container">{renderStacks()}</div>;
};

export default StacksContainer;
