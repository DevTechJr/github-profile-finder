import React from "react";
import cat from "./octocat.png";

const GitHubCat = ({ height, width }) => {
  return (
    <img style={{ height: `${height}px`, width: `${width}px` }} src={cat} />
  );
};

export default GitHubCat;
