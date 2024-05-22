import { useState, useEffect } from "react";

const BubbleSortButton = ({ array, setArray, speed, setCurrentIndices }) => {
  const [sortingInProgress, setSortingInProgress] = useState(false);
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);

  // Förbereder sorteringssteg när arrayen ändras
  useEffect(() => {
    setSteps([]);
    setStepIndex(0);
    setSortingInProgress(false);
    if (array.length > 0) {
      prepareBubbleSortSteps();
    }
  }, [array]);

  // Funktion som förbereder stegen för bubbleSort
  const prepareBubbleSortSteps = () => {
    let tempArray = [...array];
    let stepsArray = [];

    // Går igenom arrayen och genererar sorteringssteg
    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = 0; j < tempArray.length - i - 1; j++) {
        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
        }
        // Lägger till ett steg med den aktuella arrayen och de aktuella indexen
        stepsArray.push({ array: [...tempArray], indices: [j, j + 1] });
      }
    }
    setSteps(stepsArray);
  };

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
    }
  };

  return (
    <button className="btn" onClick={startSorting} disabled={sortingInProgress}>
      Bubble Sort
    </button>
  );
};

export default BubbleSortButton;
