import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";

import "./NavBar.scss";

import AnimatedLogo from "./AnimatedLogo";

const NavBar = () => {
  return (
    <Navbar variant="dark" expand="md" collapseOnSelect>
      <Navbar.Brand href="/" className="text-light">
        <AnimatedLogo color="#f8f9fa" height="2rem" width="2rem" />
        Teodor's Portfolio
      </Navbar.Brand>
      <Navbar.Toggle
        className="mb-2"
        aria-controls="basic-navbar-nav"
        style={{ outline: "none" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav defaultActiveKey="/home">
          <Nav.Item style={{ padding: "0.35rem 0.75rem" }}>
            <Nav.Link className="text-light p-0" href="/#blog">
              Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton
              title="Finance"
              variant="dark"
              className="nav-dropdown"
            >
              <Dropdown.Item href="https://www.purewacc.com" target="_blank">
                Pure WACC
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton title="3D" variant="dark" className="nav-dropdown">
              <Dropdown.Item href="/#three?scene=spheres">
                Rotating Spheres
              </Dropdown.Item>
              <Dropdown.Item href="/#three?scene=boxes">
                Random boxes
              </Dropdown.Item>
              <Dropdown.Item href="/#3D?id=ball">Falling Ball</Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton
              title="Graphics"
              variant="dark"
              className="nav-dropdown"
            >
              <Dropdown.Item href="/#mathematical-graphics/random-stars">
                Stars
              </Dropdown.Item>
              <Dropdown.Item href="/#mathematical-graphics/shooting-stars">
                Shooting Stars
              </Dropdown.Item>
              <Dropdown.Item href="/#mathematical-graphics/random-web">
                Web
              </Dropdown.Item>
              <Dropdown.Item href="/#mathematical-graphics/circular-animation">
                Circle Animation
              </Dropdown.Item>
              <Dropdown.Item href="/#mathematical-graphics/sine-wave">
                Sine Waves
              </Dropdown.Item>
              <Dropdown.Item href="/#mathematical-graphics/sine-cosine-animation">
                Sine Cosine Animation
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton
              title="Productivity"
              variant="dark"
              className="nav-dropdown"
            >
              <Dropdown.Item href="https://www.pureokrs.com" target="_blank">
                Pure OKRs
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton
              title="Sports"
              variant="dark"
              className="nav-dropdown"
            >
              <Dropdown.Item
                href="https://www.backcountrybook.com"
                target="_blank"
              >
                BackcountryBook
              </Dropdown.Item>
              <Dropdown.Item
                href="https://www.strava.com/athletes/10361672"
                target="_blank"
              >
                My Strava Profile
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
