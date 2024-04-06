// Funktioner från utils.js
import { shuffleArray } from "../../utils";

const GenButton = ({ array, setArray}) => {

    const handleGenerateClick = () => {
        const shuffledArray = shuffleArray(array);
        setArray(shuffledArray);
    }

    return ( 
        <button className="btn" onClick={handleGenerateClick}>Gen</button>
    );
}
 
export default GenButton;