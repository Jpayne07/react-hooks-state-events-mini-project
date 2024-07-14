import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addTask = (newItem) => {
    console.log("Adding task:", newItem);
    setTasks([...tasks, newItem]);
  };

  const removeTask = (taskText) => {
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    setTasks(updatedTasks);
  };

  const handleTaskFormSubmit = (newItem) => {
    addTask(newItem);
  };

  console.log("Current tasks:", tasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasks} selectedCategory={selectedCategory} removeTask={removeTask}/>
    </div>
  );
}

export default App;
