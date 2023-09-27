import React from 'react'
import { MdCancel, MdDeleteForever } from "react-icons/md"
// import { MdCheck } from "react-icons/md"

const TodoItem = ({todoData, deleteItem}) => {
  return (
  <div className='w-full px-5 border-solid border-b border-gray-200 flex flex-col justify-center h-14'>
    <div className='flex justify-between items-center'>
      <div className='flex gap-4 items-center'>
        <MdCancel size={20} className='text-blue-500' />
        {/* <MdCheck size={20} className='text-blue-500' /> */}
        <p className='text-base text-gray-600'>{todoData.text}</p>
        </div>
        <MdDeleteForever 
        size={20} 
        onClick={() => deleteItem(todoData.id)}
        className='text-red-300'/>
    </div>
  </div>
  )
}

export default TodoItem