import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <>
      <div className="btn-container">
        <button className="filter-btn" onClick={()=> filterItems("all")}>
         all
        </button>
        <button className="filter-btn" onClick={()=> filterItems("lunch")}>
        lunch
        </button>


      </div>
    </>
  );
};
export default Categories;
