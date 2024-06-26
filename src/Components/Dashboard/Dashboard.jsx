import "./Dashboard.css";
import { useState, useEffect } from "react";
import StacksContainer from "../StacksContainer/StacksContainer";
import Shuffle from "../Shuffle/Shuffle";
import BubbleSortButton from "../BubbleSortButton/BubbleSortButton";
import QuickSortButton from "../QuickSortButton/QuickSortButton";

const Dashboard = () => {
  const [speed, setSpeed] = useState(50);
  const [arraySize, setArraySize] = useState(50);
  const [array, setArray] = useState(
    Array.from({ length: 50 }, (_, index) => index + 1)
  );
  const [currentIndices, setCurrentIndices] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  // Uppdaterar array när arraySize ändras
  useEffect(() => {
    setArray(Array.from({ length: arraySize }, (_, index) => index + 1));
  }, [arraySize]);

  return (
    <main>
      <nav id="Dashboard">
        <div className="">
          <label htmlFor="array-size" className="label-text">
            Array
          </label>
          <input
            className="range-input"
            type="range"
            min={1}
            max={100}
            value={arraySize}
            id="array-size"
            onChange={(e) => setArraySize(parseInt(e.target.value))}
          />
          <span className="label-text" id="arr-length">
            {arraySize}
          </span>
        </div>
        <div>
          <label htmlFor="speed" className="label-text">
            Speed
          </label>
          <input
            className="range-input"
            type="range"
            min={1}
            max={100}
            value={speed}
            id="speed"
            onChange={(e) => setSpeed(parseInt(e.target.value))}
          />
          <span className="label-text" id="speed">
            {`${speed}ms`}
          </span>
        </div>
        <Shuffle arraySize={arraySize} setArray={setArray} />
        <BubbleSortButton
          array={array}
          setArray={setArray}
          speed={speed}
          setCurrentIndices={setCurrentIndices}
          setHighlightedIndex={setHighlightedIndex}
        >
        </BubbleSortButton>
        <QuickSortButton
          array={array}
          speed={speed}
          setArray={setArray}
          setCurrentIndices={setCurrentIndices}
        >
        </QuickSortButton>
        <button className="btn">Selection Sort</button>
      </nav>

      <StacksContainer
        array={array}
        currentIndices={currentIndices}
        highlightedIndex={highlightedIndex}
      />
    </main>
  );
};

export default Dashboard;
