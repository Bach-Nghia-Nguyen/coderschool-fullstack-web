import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import RPS from "../images/rock-paper-scissors.png";

const Box = ({ title, color, winner, handSign }) => {
  const handValue =
    handSign === "scissors"
      ? scissors
      : handSign === "paper"
      ? paper
      : handSign === "rock"
      ? rock
      : RPS;

  let win = winner === 1 ? "Win" : winner === 0 ? "Draw" : "Lose";
  return (
    <div className={`choice-card ${color}`}>
      <h1>{title}</h1>
      <img src={handValue} alt="Rock Paper Scissors" />
      <h2>{win}</h2>
    </div>
  );
};

export default Box;
