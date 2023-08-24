import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: `Cortar cebolla`, complete: false},
  { text: `Tomar el curso de Introduccion a React.js`, complete: false},
  { text: `Llorar con la llorona`, complete: false},
  { text: `Going going going`, complete: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter complete={16} total={25}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} complete={todo.complete}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
