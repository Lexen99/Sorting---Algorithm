import { useState, useEffect } from "react";

const BubbleSortButton = ({ array, setArray, speed, setCurrentIndices, }) => {
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);

  // Förbereder sorteringssteg när arrayen ändras
  useEffect(() => {
    if (array.length > 0) {
      prepareBubbleSortSteps(array);
    }
  }, [array]);

  // Funktion som förbereder stegen för bubbleSort
  const prepareBubbleSortSteps = (array) => {
    let tempArray = [...array];
    let stepsArray = [];
    let n = tempArray.length;

    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        // Lägger till ett steg för jämförelsen
        stepsArray.push({ array: [...tempArray], indices: [j, j + 1] });
        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          swapped = true;
          // Lägger till ett steg för bytet
          stepsArray.push({ array: [...tempArray], indices: [j, j + 1] });
        }
      }
      if (!swapped) break; // Om ingen swap har skett, är arrayen sorterad
    }

    setSteps(stepsArray);
  };

  // useEffect för att hantera sorterings animation
  useEffect(() => {
    if (sortingInProgress && stepIndex < steps.length) {
      const timer = setTimeout(() => {
        setArray(steps[stepIndex].array);
        setCurrentIndices(steps[stepIndex].indices);
        setStepIndex(stepIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (stepIndex >= steps.length) {
      setSortingInProgress(false);
      setCurrentIndices([]);
    }
  }, [sortingInProgress, stepIndex, steps, setArray, setCurrentIndices, speed]);

  //Funktion som startar sorteringen
  const startSorting = () => {
    if (steps.length > 0) {
      setSortingInProgress(true);
      setStepIndex(0);
    }
  };

  return (
    <button className="btn" onClick={startSorting} disabled={sortingInProgress}>
      Bubble Sort
    </button>
  );
};

export default BubbleSortButton;
