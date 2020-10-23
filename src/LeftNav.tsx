import React from "react";
import Nav from "react-bootstrap/Nav";

const LeftNav = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link className="px-0" href="/blog">
        Blog
      </Nav.Link>
      <Nav.Item>
        Finance
        <Nav.Link href="https://www.purewacc.com">Pure WACC</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        3D
        <Nav.Link href="https://github.com/nilseng/donut">Donut</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        Productivity
        <Nav.Link href="https://www.pureokrs.com">Pure OKRs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        Sports
        <Nav.Link href="https://randohub.herokuapp.com">Randohub</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default LeftNav;
