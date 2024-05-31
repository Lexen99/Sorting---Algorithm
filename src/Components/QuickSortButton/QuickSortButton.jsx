import { useState, useEffect } from "react";

const QuickSortButton = ({ array, speed, setArray, setCurrentIndices}) => {
    const [sortingInProgress, setSortingInProgress] = useState(false);
    const [steps, setSteps] = useState([]);
    const [stepIndex, setStepIndex] = useState(0);

    // useEffect för att förbereda steg när input arrayen ändras
    useEffect(() => {
        if (array.length > 0) {
            prepareQuickSortSteps(array);
        }
    }, [array]);

    // funktion genererar alla steg som behövs för att animera QuickSort
    const prepareQuickSortSteps = (array) => {
        let stepsArray = [];

        // Hjälpfunktion för QuickSort med partitioneringslogik
        const quickSortHelper = (arr, left, right) => {
            if (left < right) {
                let pivotIndex = partition(arr, left, right);

                quickSortHelper(arr, left, pivotIndex - 1);
                quickSortHelper(arr, pivotIndex + 1, right);
            }
        };

        //Funktion för att partitionera arrayen
        const partition = (arr, left, right) => {
            let pivot = arr[right];
            let i = left - 1;

            for(let j = left; j < right; j++) {
                stepsArray.push({ array: [...arr], indices: [j, right] });
                if(arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    stepsArray.push({ array: [...arr], indices: [i, j] });
                }
            }
            [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
            stepsArray.push({ array: [...arr], indices: [i + 1, right] });
            return i + 1;
        }

        let tempArray = [...array];
        quickSortHelper(tempArray, 0, tempArray.length - 1);
        setSteps(stepsArray);
    }

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
        <button className="btn" onClick={startSorting} disabled={sortingInProgress}>Quick Sort</button>
    );
}
 
export default QuickSortButton;