import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}) {

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
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider};


