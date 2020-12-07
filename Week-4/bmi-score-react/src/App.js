import React from "react";
// import style and bootstrap
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

//import components
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
