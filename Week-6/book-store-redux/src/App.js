import React from "react";
// import bootstrap and style
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import components
import PublicNavbar from "./components/PublicNavbar";
import AlertMsg from "./components/AlertMsg";
// import pages
import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";
import NotFoundPage from "./pages/NotFoundPage";
import BookDetailPage from "./pages/BookDetailPage";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <Router>
      <PublicNavbar />
      <AlertMsg />
      <Row>
        <Col>Sidemenu</Col>
        <Col>
          <Switch>
            <Route exact path="/books/:id" component={BookDetailPage} />
            <Route exact path="/reading" component={ReadingPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
