
import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";


// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  const {
    item: todos, 
    saveItem: saveTodos , 
    loading, 
    error
  }= useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  // console.log('Log 1');

  // React.useEffect(() => {
  //   console.log('');
  // });
  // React.useEffect(() => {
  //   console.log('Looooooooooog 2');
  // },[totalTodos]);

  // console.log('Log 3');

  const searchedTodos = todos.filter(
    (todo) =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase(); 
      return todoText.includes(searchText);
    }
  );

  const completeTodo =(text)=>{
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo =(text)=>{
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text ===text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
    
  )
}

export default App;
