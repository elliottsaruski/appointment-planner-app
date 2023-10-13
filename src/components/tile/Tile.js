import React from "react";

export const Tile = ({ value }) => {
  const descriptions = Object.values(value);
  return (
    <div className="tile-container">
      {descriptions.map((description, index) => {
        if (index === 0) {
          return (
            <p className="tile-title" key={index}>
              {" "}
              {description}{" "}
            </p>
          );
        } else {
          return (
            <p className="tile" key={index}>
              {" "}
              {description}{" "}
            </p>
          );
        }
      })}
    </div>
  );
};
