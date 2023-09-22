import './App.css';
import moon from "./Resources/icon-moon.svg"
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className='h-screen'>
      <div className="lg:px-[20rem] px-6 h-[16rem] w-full bg-[url('./Resources/bg-desktop-light.jpg')] bg-cover bg-no-repeat">
        <div className='flex justify-between py-12 px-6'>
          <h2 className='font-bold text-4xl text-white tracking-widest'>TODO</h2>
          <img src={moon} alt="moon icon"/>
        </div>
        <Form />
      </div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
