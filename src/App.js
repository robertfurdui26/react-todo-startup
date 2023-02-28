import React from 'react';
import ToDoItem from './ToDoItem';
import todoData from './todoData';
import './style.css';

<<<<<<< HEAD
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
=======
function App() {
  const todoNew = todoData.map((item) => (
    <ToDoItem key={item.id} item={item} />
  ));

  return (
    <div className='todo-list'>
      {todoNew}
      <img src='./images/logo.svg' style={{ width: '40px', height: '40px' }} />
    </div>
  );
>>>>>>> e3be09b80ecafc6c9cbf5bd523a454b59633b2ae
}
export default App;
