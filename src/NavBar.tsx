import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";

const NavBar = () => {
  return (
    <Navbar
      bg="light"
      expand="md"
      collapseOnSelect
      className="border-bottom border-primary"
    >
      <Navbar.Brand href="/">Teodor's Portfolio</Navbar.Brand>
      <Navbar.Toggle
        className="mb-2"
        aria-controls="basic-navbar-nav"
        style={{ outline: "none" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav defaultActiveKey="/home">
          <Nav.Item style={{ padding: "0.35rem 0.75rem" }}>
            <Nav.Link className="p-0" href="/blog">
              Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton title="Finance" variant="link">
              <Dropdown.Item href="https://www.purewacc.com" target="_blank">
                Pure WACC
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton title="3D" variant="link">
              <Dropdown.Item
                href="https://github.com/nilseng/donut"
                target="_blank"
              >
                Donut
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton title="Productivity" variant="link">
              <Dropdown.Item href="https://www.pureokrs.com" target="_blank">
                Pure OKRs
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          <Nav.Item>
            <DropdownButton title="Sports" variant="link">
              <Dropdown.Item
                href="https://randohub.herokuapp.com"
                target="_blank"
              >
                Randohub
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
