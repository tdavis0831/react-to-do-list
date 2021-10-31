import React, { useState } from "react";
import './App.css'; 
import Form  from "./components/form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Tasha's To Do List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
