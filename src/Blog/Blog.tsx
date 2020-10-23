import React from "react";

const Blog = () => {
  return (
    <>
      <div className="my-4">
        I'm Teodor Nilseng Danielsen. A software engineer, economist, Norwegian
        and person. Send me an{" "}
        <a href="mailto:teodor.nilseng@gmail.com">email</a> if you're interested
        in one of my projects.
      </div>
      <div>
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
