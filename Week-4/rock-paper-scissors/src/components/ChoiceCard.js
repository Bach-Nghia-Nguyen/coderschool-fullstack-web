import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import RPS from "../images/rock-paper-scissors.png";

const flipRule = {
  left: { rock: false, paper: false, scissors: true, unknown: false },
  right: { rock: false, paper: true, scissors: false, unknown: false },
};

const ChoiceCard = ({ title, winner, hand, side }) => {
  const played =
    hand === "rock"
      ? rock
      : hand === "paper"
      ? paper
      : hand === "scissors"
      ? scissors
      : RPS;

  return (
    <div
      className={`d-flex flex-column align-items-center choice-card ${
        winner === 1 && "border-success"
      } ${winner === -1 && "border-danger"}`}
    >
      <h2 className="text-center">{title}</h2>
      <img
        src={played}
        alt="Rock Paper Scissors"
        className={flipRule[side][hand] ? "flip" : ""}
      />
      {winner === 1 && <h2 className="text-success font-weight-bold">Win</h2>}
      {winner === -1 && <h2 className="text-danger font-weight-bold">Lose</h2>}
      {winner === 0 && <h2 className="font-weight-bold">Draw</h2>}
    </div>
  );
};

export default ChoiceCard;
