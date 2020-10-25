import React from "react";
import apartment from "./images/518_62667910.jpg";

const Blog = () => {
  return (
    <>
      <div className="my-4">
        I'm Teodor Nilseng Danielsen. A Norwegian software engineer and
        economist. Send me an{" "}
        <a href="mailto:teodor.nilseng@gmail.com">email</a> if you're interested
        in one of my projects.
      </div>
      <div className="py-4">
        <p className="text-muted">
          {new Date("2020/10/25").toLocaleString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          :
        </p>
        I'm selling my my cute 25 square meter apartment today.
        <img src={apartment} className="w-100" alt="apartment" />
      </div>
      <div className="py-4">
        <p className="text-muted">
          {new Date("2020/10/23").toLocaleString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          :
        </p>
        I've created my first blog post.
      </div>
    </>
  );
};

export default Blog;
