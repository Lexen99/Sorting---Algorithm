import "./StacksContainer.css";
import { useEffect, useState } from "react";

const StacksContainer = ({ arraySize }) => {
  // state variabel som förvarar stack heights
  const [stackHeights, setStackHeights] = useState([]);

  // Funktion för att generera en array med olika höjder på stacksen baserat på arraySize, från 1 - Arraysize i procent
  const generateRandomStackHeights = (size) => {
    const heights = Array.from({ length: size}, (_, index) => index + 1);
    const shuffledHeights = shuffleArray(heights);
    console.log(shuffledHeights)
    return shuffledHeights;
  };

  // Funktion for att shuffle:a array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // uppdaterar stack heights när arraySize propen ändras
  useEffect(() => {
    // Genererar ny stack heights array baserad på arraySize
    const newStackHeights = generateRandomStackHeights(arraySize);
    setStackHeights(newStackHeights);
  }, [arraySize]);

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
