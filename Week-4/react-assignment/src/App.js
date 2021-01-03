import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import Asm1 from "./components/Asm1";
import Asm2 from "./components/Asm2";
// import HookFlow from "./components/HookFlow";
// import Title from "./components/Title";

const App = () => {
  return (
    <Container>
      {/* <Asm1 /> */}
      <Asm2 />

      {/* <HookFlow /> */}
      {/* <Title /> */}
    </Container>
  );
};

export default App;
