import React from 'react'
import { RiDeleteBin2Line } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"
// import { BsCheckLg } from "react-icons/bs"

const TodoItem = () => {
  return (
    <div className='px-4'>
      <div className='border border-solid border-gray-300 py-5 flex justify-between lg:px-[20rem] px-6'>
        <div className='flex gap-4 items-center'>
        <RxCross2 size={20} className='text-blue-600' />
        {/* <BsCheckLg size={20} className='text-blue-600' /> */}
        <h6 className='text-base'>Item 1</h6>
        </div>
        <RiDeleteBin2Line size={20} className='text-red-500'/>
      </div>
    </div>
  )
}

export default TodoItem