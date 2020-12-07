import React /* { useState, useEffect } */ from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components
import PublicNavbar from "./components/PublicNavbar";
import AlertMsg from "./components/AlertMsg";

// import pages
import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";
import BookDetailPage from "./pages/BookDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <PublicNavbar />
      <AlertMsg />
      <Switch>
        <Route exact path="/books/:id" component={BookDetailPage} />
        <Route exact path="/reading" component={ReadingPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
