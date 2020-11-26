import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/Box";

function App() {
  const handChoice = ["rock", "paper", "scissors"];
  const colorWin = "border-success";
  const colorLose = "border-danger";
  const colorDraw = "border-warning";

  let [hand1, setUserHand] = useState("rock-paper-scissors");
  let [hand2, setComputerHand] = useState("rock-paper-scissors");
  let [winner, setWinner] = useState(0);
  let [color1, setColor1] = useState("");
  let [color2, setColor2] = useState("");

  const playRPS = (e) => {
    e.preventDefault();
    console.log("clicked");
    hand1 = handChoice[Math.floor(Math.random() * handChoice.length)];
    hand2 = handChoice[Math.floor(Math.random() * handChoice.length)];

    console.log(hand1, hand2);
    if (hand1 === hand2) {
      setWinner(0);
      setColor1(colorDraw);
      setColor2(colorDraw);
    } else {
      if (
        (hand1 === "rock" && hand2 === "scissors") ||
        (hand1 === "paper" && hand2 === "rock") ||
        (hand1 === "scissors" && hand2 === "paper")
      ) {
        setWinner(1);
        setColor1(colorWin);
        setColor2(colorLose);
      } else if (hand1 === "rock" && hand2 === "paper") {
        setWinner(-1);
        setColor1(colorLose);
        setColor2(colorWin);
      } else if (hand1 === "paper" && hand2 === "scissors") {
        setWinner(-1);
        setColor1(colorLose);
        setColor2(colorWin);
      } else if (hand1 === "scissors" && hand2 === "rock") {
        setWinner(-1);
        setColor1(colorLose);
        setColor2(colorWin);
      }
    }
    setUserHand(hand1);
    setComputerHand(hand2);
  };
  return (
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome to Rock Paper Scissors</h1>
      <div class="d-flex flex-row justify-content-between card-field">
        <Box title="You" color={color1} winner={winner} handSign={hand1} />
        <Box
          title="Computer"
          color={color2}
          winner={-winner}
          handSign={hand2}
        />
      </div>
      <button onClick={playRPS}>Play</button>
    </div>
  );
}

export default App;
