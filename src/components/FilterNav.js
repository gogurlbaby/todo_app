import React from "react"

const FilterNav = () => {
  return (
    <div>
      <div className="text-base flex justify-center gap-6 items-center w-full h-14 border-b border-solid border-black">
        <button type="button" className="focus:font-semibold">All</button>
        <button type="button" className="focus:font-semibold">Active</button>
        <button type="button" className="focus:font-semibold">Completed</button>
      </div>
    </div>
  )
}

export default FilterNav