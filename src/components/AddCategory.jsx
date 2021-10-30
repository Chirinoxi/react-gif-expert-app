import "./AddCategory.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories, ]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories, ]);
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleAdd}>Agregar</button>
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
