import React from "react";
import ToDoItem from "./ToDoItem"; //am importat viitoarea 'pagina',unde creez todoitem
import "./style.css"; //import style pt pagina mea

function App() {
  return (
    <div className="todo-loist">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>

    //am exportat by default App in index,js pt a face render la ToDoItem
    // iti pun toate fisierele,celelalte components sunt pt alt mic proiect dar ti le las ca vezi header,ContactList etc.
  );
}

export default App;
