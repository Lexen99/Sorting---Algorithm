import { useState, useEffect } from "react";

const BubbleSortButton = ({ array, setArray, speed, setCurrentIndices, setHighlightedIndex }) => {
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
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < tempArray.length - 1; i++) {
        stepsArray.push({ array: [...tempArray], indices: [i, i + 1], highlight: i });
        if (tempArray[i] > tempArray[i + 1]) {
          [tempArray[i], tempArray[i + 1]] = [tempArray[i + 1], tempArray[i]];
          swapped = true;
          stepsArray.push({ array: [...tempArray], indices: [i, i + 1], highlight: i + 1 });
        }
      }
    } while (swapped);
    setSteps(stepsArray);
  };

  useEffect(() => {
    if (sortingInProgress && stepIndex < steps.length) {
      const timer = setTimeout(() => {
        setArray(steps[stepIndex].array);
        setCurrentIndices(steps[stepIndex].indices);
        setHighlightedIndex(steps[stepIndex].highlight);
        setStepIndex(stepIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (stepIndex >= steps.length) {
      setSortingInProgress(false);
      setCurrentIndices([]);
      setHighlightedIndex(null);
    }
  }, [sortingInProgress, stepIndex, steps, setArray, setCurrentIndices, setHighlightedIndex, speed]);

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
