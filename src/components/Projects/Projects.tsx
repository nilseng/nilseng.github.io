import React from "react";
import BlogPost from "../Blog/BlogPost";
import Container from "react-bootstrap/esm/Container";

import pureokrsImg from "./images/pureokrs.png";
import purewaccImg from "./images/purewacc.png";
import bcbookImg from "./images/backcountrybook.png";
import StarBackground from "../MathGraphics/StarBackground";

const Projects = () => {
  return (
    <>
      <StarBackground />
      <Container className="py-4">
        <h2 className="text-light">Projects</h2>
        <a
          href="https://www.backcountrybook.com"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <BlogPost
            title="BackcountryBook.com"
            content={[
              `BackcountryBook - an application for exploring and sharing backcountry skiing experiences. Share routes and images. Explore mountains in 2D or 3D.`,
              `Stack: React, Node.js, Express, MongoDB, AWS S3`,
            ]}
            picture={bcbookImg}
          />
        </a>
        <a
          href="https://www.purewacc.com"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <BlogPost
            title="PureWACC.com"
            content={[
              `Pure Weighted Average Cost of Capital - an application simplifying calculation and distribution of WACCs for multi market and multi industry projects.`,
              `Stack: React, Node.js, Express, MongoDB`,
            ]}
            picture={purewaccImg}
          />
        </a>
        <a
          href="https://www.pureokrs.com"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <BlogPost
            title="PureOKRs.com"
            content={[
              `Pure Objectives and Key Result - a goal management application.`,
              `Stack: Angular, Node.js, Express, MongoDB`,
            ]}
            picture={pureokrsImg}
          />
        </a>
      </Container>
    </>
  );
};

export default Projects;
