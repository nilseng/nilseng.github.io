import React from "react";
import Container from "react-bootstrap/esm/Container";
import StarBackground from "../MathGraphics/StarBackground";
import BlogPost from "./BlogPost";
import apartment from "./images/518_62667910.jpg";

const Blog = () => {
  return (
    <>
      <StarBackground />
      <Container>
        <div className="bg-dark text-light rounded p-4 my-4">
          I'm Teodor Nilseng Danielsen. A Norwegian software engineer and
          economist. Send me an{" "}
          <a href="mailto:teodor.nilseng@gmail.com">email</a> if you're
          interested in one of my projects.
        </div>
        <BlogPost
          date="2020/10/25"
          title="Basic physics + three.js"
          content={[
            `Going back to school and the 3 equations of motion today to create a
          rolling and falling ball animation.`,
            `The ball is rendered
          using three.js.`,
          ]}
          link="/3D?id=ball"
        />
        {/* <div className="bg-dark rounded p-4 my-4">
        <p className="text-muted">
          {new Date("2020/10/25").toLocaleString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          :
        </p>
        <h5>How to animate a falling and rolling ball.</h5>
        <div>
          Going back to school and the 3 equations of motion today to create the
          rolling and falling ball background animation. The ball is rendered
          using three.js. The ball's position is changed incrementally, assuming
          60 frames per second. The speed in x direction is kept constant, while
          the speed in y direction is increasing due to gravity until it hits
          the plane. And then it falls off, accellerating with 9.81m/s^2 again.
          <BackgroundAnimation />
        </div>
      </div> */}
        <BlogPost
          date="2020/10/25"
          title="Apartment sold!"
          picture={apartment}
          content={["I'm selling my my cute 25 square meter apartment today."]}
        />
        <BlogPost
          date="2020/10/23"
          title="Hello World!"
          content={["My very first blogpost."]}
        />
      </Container>
    </>
  );
};

export default Blog;
