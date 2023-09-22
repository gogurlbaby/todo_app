import './App.css';
import moon from "./Resources/icon-moon.svg"
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className='min-h-screen bg-[#F2F2F2]'>
      <div className="lg:px-[20rem] pt-8 px-5 h-52 w-full bg-[url('./Resources/bg-desktop-light.jpg')] bg-cover bg-no-repeat">
        <div className='flex justify-between items-center'>
          <p className='font-bold text-4xl text-white tracking-widest'>TODO</p>
          <img src={moon} alt="moon icon" className='h-5 w-5'/>
        </div>
        <Form />
      </div>
      <div className='relative bottom-8 h-56 bg-white rounded-xl w-[90%] mx-auto'>
       <TodoItem />
       <TodoItem />
       <TodoItem />
       <TodoItem />
       <div className='px-5 h-14 border-solid border border-gray-300 flex flex-col justify-center'>
         <div className='flex justify-between items-center'>
          <p className='text-base text-gray-400'>4 items</p>
          <button type="button" className='text-base text-gray-400'>Clear Completed</button>
         </div>
       </div>
      </div>
    </div>
  );
}

export default App;
