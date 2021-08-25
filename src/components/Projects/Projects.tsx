import React from "react";
import BlogPost from "../Blog/BlogPost";
import Container from "react-bootstrap/Container";

import pureokrsImg from "./images/pureokrs.png";
import purewaccImg from "./images/purewacc.png";
import bcbookImg from "./images/backcountrybook2.png";
import norskeAksjerImg from "./images/norske_aksjer.png";
import { ShootingStars } from "../MathGraphics/ShootingStars";

const Projects = () => {
  return (
    <>
      <ShootingStars />
      <Container className="py-4">
        <a
          href="https://www.backcountrybook.com"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <BlogPost
            content={[
              `BackcountryBook - an application for exploring and sharing backcountry skiing experiences. Share routes and images. Explore mountains in 2D or 3D.`,
              `Built with React, Node.js, Express, MongoDB, AWS S3, Mapbox, Auth0 and more.`,
            ]}
            picture={bcbookImg}
          />
        </a>
        <a
          href="https://norske-aksjer.herokuapp.com"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <BlogPost
            content={[
              `Norske aksjer - Search for and find all Norwegian companies and their shareholders.`,
              `Built with React, Node.js, Express, MongoDB and more.`,
            ]}
            picture={norskeAksjerImg}
          />
        </a>
        <a
          href="https://www.purewacc.com"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          <BlogPost
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
