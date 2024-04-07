// Funktioner från utils.js
import { shuffleArray } from "../../utils";

const Shuffle = ({ arraySize, setArray }) => {

  const shuffleArrayOnClick = () => {
        // Generar en ny array från till arraySize
        const array = Array.from({ length: arraySize }, (_, index) => index + 1);
        // Shufflar arrayen
        const shuffled = shuffleArray(array);
        // Uppdaterar array state  med den shufflade arrayen
        setArray(shuffled);
    };

  return (
    <button className="btn" onClick={shuffleArrayOnClick}>
      Shuffle
    </button>
  );
};

export default Shuffle;
