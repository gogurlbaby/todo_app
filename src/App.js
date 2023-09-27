import { useState } from 'react';
import './App.css';
import moon from "./Resources/icon-moon.svg"
import FilterNav from './components/FilterNav';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

const App = () => {

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
  return (
    <div className='min-h-screen bg-[#F2F2F2]'>
      <div className="lg:px-[20%] pt-8 px-5 h-52 w-full lg:bg-[url('./Resources/bg-desktop-light.jpg')] bg-[url('./Resources/bg-mobile-light.jpg')] bg-cover bg-no-repeat">
        <div className='flex justify-between items-center'>
          <p className='font-bold text-4xl text-white tracking-widest'>TODO</p>
          <img src={moon} alt="moon icon" className='h-5 w-5'/>
        </div>
        <Form addHandler={addTodo} />
      </div>
     
      <div className='relative bottom-6 h-54 bg-white rounded-tl-md rounded-tr-md lg:w-[60%] md:w-[95%] w-[90%] mx-auto'>
       <FilterNav />
       {todoList.map(item => 
        <TodoItem 
         key={item.id} 
         deleteItem={removeTodoById} 
         todoData={item} 
        />
       )}
        <div className='rounded-bl-md rounded-br-md bg-white flex justify-between items-center px-5 h-14'>
          <p className='text-base text-gray-400'>4 items</p>
          <button type="button" className='text-base text-gray-400'>Clear Completed</button>
       </div>
      </div>
    </div>
  );
}

export default App;
