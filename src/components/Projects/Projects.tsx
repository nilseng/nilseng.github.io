import React from "react";
import BlogPost from "../Blog/BlogPost";
import Container from "react-bootstrap/esm/Container";

import pureokrsImg from "./images/pureokrs.png";
import purewaccImg from "./images/purewacc.png";
import bcbookImg from "./images/backcountrybook.png";
import StarBackground from "../StarBackground";

const Projects = () => {
  return (
    <>
      <StarBackground />
      <Container className="py-4">
        <h2 className="text-light">Projects</h2>
        <BlogPost
          title="BackcountryBook.com"
          content={[
            `BackcountryBook - an application for exploring and sharing backcountry skiing experiences. Share routes and images. Explore mountains in 2D or 3D.`,
            `Stack: React, Node.js, Express, MongoDB, AWS S3`,
          ]}
          picture={bcbookImg}
          externalUrl="https://www.backcountrybook.com"
        />
        <BlogPost
          title="PureWACC.com"
          content={[
            `Pure Weighted Average Cost of Capital - an application simplifying calculation and distribution of WACCs for multi market and multi industry projects.`,
            `Stack: React, Node.js, Express, MongoDB`,
          ]}
          picture={purewaccImg}
          externalUrl="https://www.purewacc.com"
        />
        <BlogPost
          title="PureOKRs.com"
          content={[
            `Pure Objectives and Key Result - a goal management application.`,
            `Stack: Angular, Node.js, Express, MongoDB`,
          ]}
          picture={pureokrsImg}
          externalUrl="https://www.pureokrs.com"
        />
      </Container>
    </>
  );
};

export default Projects;
