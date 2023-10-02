import React, { useState } from "react"

const Form = ({addHandler}) => {

  const [userInput, setUserInput] = useState("")

  const handleForm = (e) => {
     e.preventDefault()
    //Check if user does not submit an empty item
     if (userInput.trim() !== "") {
      addHandler(userInput)
     }
     // Reset the input field in either case
      setUserInput("")
  }

  return (
    <div className="py-2 mt-6 px-1 bg-white rounded-lg">
      <form className="flex items-center" onSubmit={handleForm}>
        <div className="w-full">
          <input 
          type="text"
          name="todoItem"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Create new ToDo Item"
          className="w-full px-8 rounded-lg h-10 block focus:outline-none"
          />
        </div>
         <button type="submit" className="cursor-pointer py-2.5 mr-2 px-4 inline-flex items-center bg-blue-500 text-white text-sm rounded-lg">Add</button>
      </form>
    </div>
  )
}

export default Form