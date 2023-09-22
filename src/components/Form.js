import React from 'react'

const Form = () => {
  return (
    <div>
      <input 
       type='text'
       placeholder='Create new ToDo Item'
       className='w-full py-4 rounded-lg my-4 px-8'
      />
     <button className='cursor-pointer absolute top-[10rem] lg:right-[21rem] right-10 py-2.5 px-4 bg-blue-500 text-white text-sm rounded-lg'>Add</button>
    </div>
  )
}

export default Form