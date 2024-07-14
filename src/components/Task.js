import React from "react";

function Task({text, category, handleDelete}) {
  return (
    <div className="task" key = {text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
