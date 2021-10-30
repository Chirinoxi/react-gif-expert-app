import React from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInDown">
      <p>{title}</p>
      <hr />
      <img alt={title} src={url} />
    </div>
  );
};

export default GifGridItem;
