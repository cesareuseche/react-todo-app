import React, { useState, useEffect } from "react";
//IMPORTING COMPONENTS
import Form from "./todoform";
import TodoList from "./todolist";

export function App() {
  // STATE
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USE EFFECT
  useEffect(
    () => {
      filterHandler();
    }, [todos, status]);
  // FUNCTIONS
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(
          todos.filter(todo => todo.completed === false)
        );
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <React.Fragment>
      <header>
        <h1>{"Todo"}</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </React.Fragment>
  );
}
export default App;