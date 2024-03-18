import "./Dashboard.css";
import { useState, useEffect } from "react";
import StacksContainer from "../StacksContainer/StacksContainer";

const Dashboard = () => {
  const [speed, setSpeed] = useState(50);
  const [arraySize, setArraySize] = useState(50);

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
            onChange={(e) => setArraySize(e.target.value)}
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
            onChange={(e) => setSpeed(e.target.value)}
          />
          <span className="label-text" id="speed">
            {`${speed}ms`}
          </span>
        </div>
        <button className="btn">Gen</button>
        <button className="btn">Bubble</button>
        <button className="btn">Quick</button>
        <button className="btn">Selection Sort</button>
      </nav>

      <StacksContainer arraySize={arraySize} />
    </main>
  );
};

export default Dashboard;
