import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./NavBar.scss";

import AnimatedLogo from "./AnimatedLogo";

const NavBar = () => {
  return (
    <Navbar variant="dark" expand="md" collapseOnSelect>
      <Navbar.Brand href="/" className="text-light">
        <AnimatedLogo color="#f8f9fa" height="2rem" width="2rem" />
        <span className="font-weight-light mx-4">Teodor's Portfolio</span>
      </Navbar.Brand>
      <Navbar.Toggle
        className="mb-2"
        aria-controls="basic-navbar-nav"
        style={{ outline: "none" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav defaultActiveKey="/home">
          <Nav.Link className="text-light small" href="/#blog">
            Blog
          </Nav.Link>
          <NavDropdown
            className="small"
            title="Finance"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              className="small"
              href="https://www.purewacc.com"
              target="_blank"
            >
              Pure WACC
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="small" title="3D" id="basic-navbar-nav">
            <NavDropdown.Item className="small" href="/#three?scene=spheres">
              Rotating Spheres
            </NavDropdown.Item>
            <NavDropdown.Item className="small" href="/#three?scene=boxes">
              Random boxes
            </NavDropdown.Item>
            <NavDropdown.Item className="small" href="/#3D?id=ball">
              Falling Ball
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="small" title="Graphics" id="basic-navbar-nav">
            <NavDropdown.Item
              className="small"
              href="/#mathematical-graphics/random-stars"
            >
              Stars
            </NavDropdown.Item>
            <NavDropdown.Item
              className="small"
              href="/#mathematical-graphics/shooting-stars"
            >
              Shooting Stars
            </NavDropdown.Item>
            <NavDropdown.Item
              className="small"
              href="/#mathematical-graphics/bezier-waves"
            >
              Bezier Waves
            </NavDropdown.Item>
            <NavDropdown.Item
              className="small"
              href="/#mathematical-graphics/random-web"
            >
              Web
            </NavDropdown.Item>
            <NavDropdown.Item
              className="small"
              href="/#mathematical-graphics/circular-animation"
            >
              Circle Animation
            </NavDropdown.Item>
            <NavDropdown.Item
              className="small"
              href="/#mathematical-graphics/sine-wave"
            >
              Sine Waves
            </NavDropdown.Item>
            <NavDropdown.Item
              className="small"
              href="/#mathematical-graphics/sine-cosine-animation"
            >
              Sine Cosine Animation
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="small"
            title="Productivity"
            id="basic-navbar-nav"
          >
            <NavDropdown.Item
              className="small"
              href="https://www.pureokrs.com"
              target="_blank"
            >
              Pure OKRs
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="small" title="Sports" id="basic-navbar-nav">
            <NavDropdown.Item
              className="small"
              href="https://www.backcountrybook.com"
              target="_blank"
            >
              BackcountryBook
            </NavDropdown.Item>
            <NavDropdown.Item
              className="small"
              href="https://www.strava.com/athletes/10361672"
              target="_blank"
            >
              My Strava Profile
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
