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
          date="2021/04/14"
          title="Github Pages"
          content={[
            `Quite happy with being able to move this web page (a React single page application) to Github pages today. The site was previously hosted on a free dyno on Heroku.
            A big drawback with free dynos on Heroku is that they don't allow serving with https when using a custom domain (like nilseng.com in my case). Another quite annoying thing
            is the 30 second or so delay users have to wait if the dyno is "sleeping". 
            `,
            `While being able to host the page for free, with https, a custom domain (which is almost free at Namecheap.com) and no sleeping dynos, I have to say having
            to use a HashRouter instead of a normal Router from react-router is a big minus (there may be a way around this, but in case it's real hard to find). In addition, the 
            docs where quite difficult to navigate. I should probably not be too surprised about a Microsoft company having Microsoft like docs though..
            `,
            `Anyways, farewell and thank you for your service free Heroku dynos, and welcome to my life Github Pages <3.`,
          ]}
        />
        <BlogPost
          date="2020/10/25"
          title="Basic physics + three.js"
          content={[
            `Going back to school and the 3 equations of motion today to create a
          rolling/falling ball animation with earth like gravity.`,
            `The ball is rendered
          using three.js.`,
          ]}
          link="/3D?id=ball"
        />
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
