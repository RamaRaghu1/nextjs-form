import React, { useState } from "react"

export default function CourseContent({ id, title, desc,content }) {
  const [toggle, setToggle] = useState(false)

  const onHandlestate = () => {
    setToggle(!toggle)
  }

  return (
    
    <>
    <div className="md:mx-24 mx-8">
    <article className="p-2 px-5 pt-4 text-left rounded-md ">
      <div
        onClick={() => onHandlestate()}
        className="flex flex-row justify-between cursor-pointer"
      >
        <h2
          className="px-4 md:text-2xl font-bold text-left w-3/4 text-black text-lg font-Poppins"
          onClick={() => onHandlestate()}
        >
          {title}
        </h2>

        <button
          className="w-10 h-10 text-lg text-white font-semibold  bg-blue-600 rounded-full md:text-3xl"
          onClick={() => onHandlestate()}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>

      {toggle && (
        <p className="text-sm text-gray-600 lg:text-base font-Poppins">
          {
            content.map((content,i)=>(
                <li key={i}>{content}</li>
            ))
          }
        </p>
      )}
    </article>
    <hr/>
    </div>
    </>
  )
}