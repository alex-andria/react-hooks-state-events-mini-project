import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from "react";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask){
    setTasks([...tasks, newTask]);
  }

  function handleDelete(deletedTaskText){
    const newTaskArray = tasks.filter((task) => task.text !== deletedTaskText);
    setTasks(newTaskArray);
  }

  const tasksShown = tasks.filter(
    ((task) => category === "All" || task.category === category) 
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
        />
      <NewTaskForm 
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList tasks={tasksShown} onTaskDelete={handleDelete}/>
    </div>
  );
}

export default App;
