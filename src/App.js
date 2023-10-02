import { useState } from "react";
import "./App.css";
import moon from "./Resources/icon-moon.svg"
import sun from "./Resources/icon-sun.svg"
import FilterNav from "./components/FilterNav";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import { GetThemeValues } from "./context/ContextTheme";

const App = () => {
  const { darkTheme, themeHandler} = GetThemeValues()
  
  const [todoList, setTodoList] = useState([])

  //Function to add new items 
  const addTodo = (userInput) => {
    const newTodo = {
      id: Date.now(),
      text: userInput,
      status: false
    }
    setTodoList(prevData => [newTodo, ...prevData])
  }

   //Function to Remove todo by its id 
   const removeTodoById = (id) => {
     const todoItems = todoList.filter(todo => todo.id !== id) 
     setTodoList(todoItems)
   }

   //Function to set Status by toggling
   const toggleTodoStatus = (id) => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
           return {...todo, status: !todo.status}
        }
           return todo
      })
    )
   }

   //Function to Clear Completed Items
   const clearCompletedTodos = () => {
    const todoItems = todoList.filter(todo => !todo.status)
    setTodoList(todoItems)
   }

  return (
    <div className={`${ darkTheme ? "bg-slate-900" : "bg-[#F2F2F2]" } min-h-screen`}>
      <div className="lg:px-[20%] pt-8 px-5 h-52 w-full lg:bg-[url('./Resources/bg-desktop-light.jpg')] bg-[url('./Resources/bg-mobile-light.jpg')] bg-cover bg-no-repeat">
        <div className="flex justify-between items-center">
          <p className="font-bold text-4xl text-white tracking-widest">TODO</p>
          <img 
           src={ darkTheme ? sun : moon } 
           alt="moon icon" 
           onClick={themeHandler}
           className="h-5 w-5"/>
        </div>
        <Form addHandler={addTodo} />
      </div>
     
      <div className={`${darkTheme ? "bg-slate-900 text-gray-400" : "bg-white"} relative bottom-6 h-54 rounded-tl-md rounded-tr-md lg:w-[60%] md:w-[95%] w-[90%] mx-auto`}>
       <FilterNav />
       {todoList.map(item => 
        <TodoItem 
         key={item.id} 
         statusUpdate={toggleTodoStatus}
         deleteItem={removeTodoById} 
         todoData={item} 
        />
       )}
        <div className={`${darkTheme ? "bg-slate-900" : "bg-white"} rounded-bl-md rounded-br-md flex justify-between items-center px-5 h-14`}>
          <p className="text-base text-gray-400">4 items</p>
          <button 
           type="button" 
           onClick={clearCompletedTodos}
           className="text-base text-gray-400">
           Clear Completed
          </button>
       </div>
      </div>
    </div>
  );
}

export default App;
