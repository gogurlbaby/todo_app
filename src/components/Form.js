import React from 'react'

const Form = () => {
  return (
    <div className='py-2 mt-6 px-1 bg-white rounded-lg'>
      <form className='flex items-center'>
        <div className='w-full'>
          <input 
          type='text'
          placeholder='Create new ToDo Item'
          className='w-full px-8 rounded-lg h-10 block focus:outline-none'
          />
        </div>
         <button type="button" className='cursor-pointer py-2.5 mr-2 px-4 inline-flex items-center bg-blue-500 text-white text-sm rounded-lg'>Add</button>
      </form>
    </div>
  )
}

export default Form