import { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 2px solid #ccc;
  padding: 10px;
  text-align: center;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    `
    border-color: blue; /* Change to your desired outline color */
  `}
`;

const PersonalRecommand = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelect = (cardId) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(cardId)) {
        // If card is already selected, remove it
        return prevSelected.filter((id) => id !== cardId);
      } else {
        // If less than 4 cards are selected, add the new selection
        if (prevSelected.length < 4) {
          return [...prevSelected, cardId];
        }
        // If 4 cards are already selected, return the current selection
        return prevSelected;
      }
    });
  };

  const handleSubmit = () => {
    // Handle the submission of selected cards
    console.log("Selected Cards:", selectedCards);
    // Add your logic to send the selected cards to the server or perform other actions
  };

  return (
    <div>
      <GridWrapper>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
          <Card
            key={id}
            id={id}
            selected={selectedCards.includes(id)}
            onSelect={handleCardSelect}
          />
        ))}
      </GridWrapper>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </div>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Card = ({ id, selected, onSelect }) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <CardWrapper selected={selected} onClick={handleClick}>
      Card {id}
    </CardWrapper>
  );
};

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export default PersonalRecommand;
