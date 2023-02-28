import React from "react";
import ToDoItem from "./ToDoItem";
import todoData from "./todoData";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updateTodos = prevState.todos.map((todos) => {
        if (todos.id === id) {
          return {
            ...todos,
            completed: !todos.completed,
          };
        }
        return todos;
      });

      return {
        todos: updateTodos,
      };
    });
  }

  render() {
    const todoNew = this.state.todos.map((item) => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoNew}</div>;
  }
}
export default App;
