import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";

// import Age from "./components/Age";
import Greeting from "./components/Greeting";
// import Counter from "./components/Counter";
import BMICalculator from "./components/BMICalculator";

const App = () => {
  return (
    <Container>
      <BMICalculator />
      <Greeting name="Nghia" />
    </Container>
  );
};

export default App;
