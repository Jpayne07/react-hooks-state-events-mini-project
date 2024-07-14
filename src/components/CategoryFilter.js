import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  

  function handleClass(category){
    setSelectedCategory(category)
    
  }

    let categoryList = categories.map(category =>{
      return<button
      className = {selectedCategory === category? "selected":""}
      key = {category}
      onClick = {()=>handleClass(category)}
      >
        {category}
      </button>
    })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
