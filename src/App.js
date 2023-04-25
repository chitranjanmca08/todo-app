import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

  
  
  function App() {
    
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAddTodo = () => {
      if (inputValue.trim()) {
        setTodos([...todos, { text: inputValue.trim(), completed: false }]);
        setInputValue('');
      }
    };
  
    const handleDeleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    const handleCompleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };
  
    return (
      
      <div className="App"><br/>
      <div class="center_div">
        <h1>Todo App</h1>
        <div className="todo-input">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <span onClick={() => handleCompleteTodo(index)}>{todo.text} </span>&nbsp;
              <button onClick={() => handleDeleteTodo(index)} >Delete</button>
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
  
  export default App;
