import { useState } from "react";

const PersonalRecommand = () => {
  const [selectedDivs, setSelectedDivs] = useState([]);

  const handleDivClick = (divId) => {
    if (selectedDivs.includes(divId)) {
      setSelectedDivs(selectedDivs.filter((id) => id !== divId));
    } else if (selectedDivs.length < 4) {
      setSelectedDivs([...selectedDivs, divId]);
    }
  };

  return (
    <div>
      <div
        onClick={() => handleDivClick(1)}
        className={selectedDivs.includes(1) ? "selected" : ""}
      >
        Div 1
      </div>
      <div
        onClick={() => handleDivClick(2)}
        className={selectedDivs.includes(2) ? "selected" : ""}
      >
        Div 2
      </div>
      <div
        onClick={() => handleDivClick(3)}
        className={selectedDivs.includes(3) ? "selected" : ""}
      >
        Div 3
      </div>
      <div
        onClick={() => handleDivClick(4)}
        className={selectedDivs.includes(4) ? "selected" : ""}
      >
        Div 4
      </div>
    </div>
  );
};

export default PersonalRecommand;
