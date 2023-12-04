import React from "react";

const ItemWork = ({ work }) => {
  return (
    <div>
      <h2>
        {work.index} {work.title}
      </h2>
      <p>{work.description}</p>
      <p>{work.date} </p>
    </div>
  );
};

export default ItemWork;
