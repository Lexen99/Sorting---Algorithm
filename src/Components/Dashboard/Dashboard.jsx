import "./Dashboard.css";
import { useState, useEffect } from "react";
import StacksContainer from "../StacksContainer/StacksContainer";
import GenButton from "../GenButton/GenButton";

const Dashboard = () => {
  const [speed, setSpeed] = useState(50);
  const [array, setArray] = useState(50);

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
            value={array}
            id="array-size"
            onChange={(e) => setArray(e.target.value)}
          />
          <span className="label-text" id="arr-length">
            {array}
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
        <GenButton array={array} setArray={setArray}/>
        <button className="btn">Bubble</button>
        <button className="btn">Quick</button>
        <button className="btn">Selection Sort</button>
      </nav>

      <StacksContainer array={array} />
    </main>
  );
};

export default Dashboard;
