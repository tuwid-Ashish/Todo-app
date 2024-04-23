import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { addTodo, updateTodo } from '../../Features/Todo/TodoSlice';
function AddTodo() {

    const  [input, setInput]= useState('')
    const [updateMsg,setupdateMsg] = useState(false)
    const dispatch  = useDispatch()
    const todos = useSelector(state => state.todos)
    
    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    const editTodoHandler = (e)=>{
        e.preventDefault()
        console.log("worked")
        dispatch(updateTodo(input))
        setInput('')
        setupdateMsg(false)
    }

    useEffect(()=>{
      todos.map(todo =>{
        if (todo.editable == true) {
          setupdateMsg(true)
          setInput(todo.text)
        }
      })
    },[todos])

  return (
    <>
     <form onSubmit={updateMsg?editTodoHandler:addTodoHandler} className="space-x-2 mt-5 w-full justify-center items-center flex gap-2 flex-col md:flex-row">
      <input
        type="text"
        className="bg-gray-800 md:w-[70%]  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        
      />
      <button
        type="submit"
        className="text-white w-fit  bg-indigo-500 border-0 py-2 px-2  md:px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {updateMsg?"update":"Add"} Todo
      </button>
    </form>
    </>
  )
}

export default AddTodo
