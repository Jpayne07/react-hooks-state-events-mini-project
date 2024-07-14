import React, {useState} from "react";
import Task from './Task'



function TaskList({tasks, selectedCategory, removeTask}) {


 const  filteredList = selectedCategory && selectedCategory !=="All"
 ? tasks.filter(task => task.category === selectedCategory)
 : tasks;
 
  return (
    <div className="tasks">
      {filteredList.map((task) => (
        <Task 
       text = {task.text} key ={task.text} category = {task.category} handleDelete={()=>removeTask(task.text)} />
      ))}
    </div>
  );
}

export default TaskList;
