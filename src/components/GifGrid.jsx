import React from "react";
import useFetchGifs from "../hooks/useFetchGifs.js";
import GifGridItem from "./GifGridItem.jsx";

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
