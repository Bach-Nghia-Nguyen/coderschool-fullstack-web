import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import githubIco from "../images/github_icon.png";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="position-fixed navbar-fixed">
      <Navbar.Brand>
        <img src={logo} alt="CoderSchool" width="200px" />
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav>
        <a
          href="https://github.com/Bach-Nghia-Nguyen/coderschool-fullstack-web/tree/master/Week-4/weather-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={githubIco} alt="Github" width="32px" />
        </a>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
