import React from "react";

const Categories = ({ categories, onFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button type="button" key={index} className="filter-btn" onClick={() => onFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
