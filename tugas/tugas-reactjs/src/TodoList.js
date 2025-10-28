import React from "react";
import sanbercodeLogo from "./sanbercode.png";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <img src={sanbercodeLogo} alt="Sanbercode Logo" />
      <div className="todo-header">
        <h2>THINGS TO DO</h2>
        <p>During bootcamp in sanbercode</p>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input type="checkbox" id={`todo-${index}`} />
            <label htmlFor={`todo-${index}`}>{todo}</label>
          </li>
        ))}
      </ul>
      <button className="send-button">SEND</button>
    </div>
  );
};

export default TodoList;
