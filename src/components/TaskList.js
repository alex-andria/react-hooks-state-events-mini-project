import React from "react";
import Task from "./Task";

function TaskList({tasks, onTaskDelete}) {

  const taskListItems = tasks.map((task) => 
    <Task 
      key={task.text}
      text={task.text}
      category={task.category}
      onTaskDelete={onTaskDelete}
    />
  )

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskListItems}
    </div>
  );
}

export default TaskList;
