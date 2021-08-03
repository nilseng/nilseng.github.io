import React from "react";
import BlogPost from "../Blog/BlogPost";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import pureokrsImg from "./images/pureokrs.png";
import purewaccImg from "./images/purewacc.png";
import bcbookImg from "./images/backcountrybook2.png";
import { ShootingStars } from "../MathGraphics/ShootingStars";

const Projects = () => {
  return (
    <>
      <ShootingStars />
      <Container className="py-4">
        <Carousel indicators={false} interval={10000}>
          <Carousel.Item>
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
          </Carousel.Item>
          <Carousel.Item>
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
          </Carousel.Item>
          <Carousel.Item>
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
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Projects;
