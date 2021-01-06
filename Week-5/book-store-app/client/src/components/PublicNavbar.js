import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import githubIco from "../images/github_icon.png";
import { NavLink } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img src={logo} alt="Coderschool Logo" width="200px" />
      </Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/reading">
          Reading List
        </Nav.Link>
      </Nav>

      <Nav>
        <a
          href="https://github.com/Bach-Nghia-Nguyen/coderschool-fullstack-web/tree/master/Week-5/book-store-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={githubIco} alt="Github Logo" width="32px" />
        </a>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
