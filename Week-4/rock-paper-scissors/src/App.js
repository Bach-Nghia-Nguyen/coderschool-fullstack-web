import React from "react";

// import styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";

// import components
import ChoiceButtons from "./components/ChoiceButtons";
import ChoiceCard from "./components/ChoiceCard";
import PublicNavbar from "./components/PublicNavbar";
import Scores from "./components/Scores";
import GameMode from "./components/GameMode";

// import utilities
import {
  hands,
  roundOutcome,
  initialProps,
  useLocalStorageState,
} from "./utils";

const App = () => {
  //
  const [playerLeftProps, setPlayerLeftProps] = useLocalStorageState(
    "playerLeft",
    initialProps
  );
  const [playerRightProps, setPlayerRightProps] = useLocalStorageState(
    "playerRight",
    initialProps
  );
  const [gameMode, setGameMode] = useLocalStorageState("gameMode", "");

  //
  const getRoundOutcome = (playerLeftChoice, playerRightChoice) => {
    const result = roundOutcome[playerLeftChoice][playerRightChoice];
    setPlayerLeftProps({
      ...playerLeftProps,
      choice: playerLeftChoice,
      win: result,
      score: result === 1 ? playerLeftProps.score + 1 : playerLeftProps.score,
    });
    setPlayerRightProps({
      ...playerRightProps,
      choice: playerRightChoice,
      win: -result,
      score:
        result === -1 ? playerRightProps.score + 1 : playerRightProps.score,
    });
  };

  // 'one player' mode: random computer hand
  const onPlayerLeftChoose = (playerLeftChoice) => {
    const playerRightChoice = hands[Math.floor(Math.random() * 3)];
    getRoundOutcome(playerLeftChoice, playerRightChoice);
  };

  const randomPlay = () => {
    const playerLeftChoice = hands[Math.floor(Math.random() * 3)];
    const playerRightChoice = hands[Math.floor(Math.random() * 3)];
    getRoundOutcome(playerLeftChoice, playerRightChoice);
  };

  const onGameModeChoose = (mode) => {
    if (mode === "onePlayer") {
      setPlayerLeftProps({ ...playerLeftProps, title: "You" });
      setPlayerRightProps({ ...playerRightProps, title: "Computer" });
    } else if (mode === "twoPlayer") {
      setPlayerLeftProps({ ...playerLeftProps, title: "Player 1" });
      setPlayerRightProps({ ...playerRightProps, title: "Player 2" });
    }
    setGameMode(mode);
  };

  const restartGame = () => {
    setPlayerLeftProps(initialProps);
    setPlayerRightProps(initialProps);
    setGameMode("");
  };

  return (
    <>
      <PublicNavbar />

      <Container>
        <h1 className="text-center mt-5">Rock Paper Scissors</h1>
        <Row>
          <Col>
            <GameMode
              gameMode={gameMode}
              onGameModeChoose={onGameModeChoose}
              restartGame={restartGame}
            />
          </Col>
        </Row>

        <Row className="justify-content-center align-items-start">
          <Col
            md={4}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <ChoiceCard
              title={playerLeftProps.title}
              winner={playerLeftProps.win}
              hand={playerLeftProps.choice}
              side="left"
            />
          </Col>
          <Col md={2} className="align-self-center">
            <Scores
              leftScore={playerLeftProps.score}
              rightScore={playerRightProps.score}
            />
          </Col>
          <Col md={4} className="d-flex flex-column justify-content-center">
            <ChoiceCard
              title={playerRightProps.title}
              winner={playerRightProps.win}
              hand={playerRightProps.choice}
              side="right"
            />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center">
            {gameMode === "twoPlayers" && (
              <Button variant="primary" size="lg" onClick={randomPlay}>
                Random Play
              </Button>
            )}
            {gameMode === "onePlayer" && (
              <ChoiceButtons onPlayerChoose={onPlayerLeftChoose} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
