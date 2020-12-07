import React from "react";

const Scores = ({ leftScore, rightScore }) => {
  return (
    <h2 className="text-center">
      <span
        className={
          `${leftScore > rightScore && "text-success"} ` +
          `${leftScore < rightScore && "text-danger"} `
        }
      >
        {leftScore}
      </span>
      {" - "}
      <span
        className={
          `${leftScore < rightScore && "text-success"} ` +
          `${leftScore > rightScore && "text-danger"} `
        }
      >
        {rightScore}
      </span>
    </h2>
  );
};

export default Scores;
