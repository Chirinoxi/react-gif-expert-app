import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInDown">
      <p>{title}</p>
      <hr />
      <img alt={title} src={url} />
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
