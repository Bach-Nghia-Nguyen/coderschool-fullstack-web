import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

// Buttons that the player chooses hand options against the computer
// when playing 'one player' mode
const ChoiceButtons = ({ onPlayerChoose }) => {
  return (
    <ButtonGroup>
      <Button
        variant="outline-secondary"
        className="mx-1"
        onClick={() => onPlayerChoose("rock")}
      >
        Rock
      </Button>
      <Button
        variant="outline-secondary"
        className="mx-1"
        onClick={() => onPlayerChoose("paper")}
      >
        Paper
      </Button>
      <Button
        variant="outline-secondary"
        className="mx-1"
        onClick={() => onPlayerChoose("scissors")}
      >
        Scissors
      </Button>
    </ButtonGroup>
  );
};

export default ChoiceButtons;
