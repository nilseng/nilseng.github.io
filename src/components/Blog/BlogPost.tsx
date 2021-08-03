import React from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  date?: string;
  title?: string;
  content: string[];
  picture?: string;
  link?: string;
  externalUrl?: string;
}

const BlogPost = ({
  date,
  title,
  content,
  picture,
  link,
  externalUrl,
}: IProps) => {
  const history = useHistory();

  return (
    <div
      className="rounded p-5 my-4"
      onClick={() => (link ? history.push(link) : null)}
      style={
        link
          ? { cursor: "pointer", backgroundColor: "rgba(52, 58, 64, 0.4)" }
          : { backgroundColor: "rgba(52, 58, 64, 0.4)" }
      }
    >
      {title && <h5 className="text-light">{title}</h5>}
      {date && (
        <p className="text-muted">
          {new Date(date).toLocaleString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
      {picture && (
        <img
          src={picture}
          className="w-100 border-0 pb-4"
          alt="apartment"
          loading="eager"
        />
      )}
      <div className="text-light">
        {content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noreferrer"
          className="small"
        >
          {externalUrl}
        </a>
      )}
    </div>
  );
};

export default BlogPost;
