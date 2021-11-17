import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <br />
      <ol>
        {categories.map((elem, idx) => {
          return <GifGrid key={elem} category={elem} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
