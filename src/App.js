import React from 'react';
import ToDoItem from './ToDoItem';
import todoData from './todoData';
import './style.css';

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
}
export default App;
