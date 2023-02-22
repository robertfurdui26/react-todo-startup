import React from "react";
import ToDoItem from "./ToDoItem";
import "./style.css";

function App() {
  return (
    <div className="todo-loist">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;
