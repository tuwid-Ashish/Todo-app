import { useEffect, useState } from 'react'
import AddTodo from './App/Components/addTodo'
import Todo from './App/Components/Todo'
import   './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,setTodos } from './Features/Todo/TodoSlice'

function App() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  
  // // Save todos to localStorage whenever todos changes
  useEffect(() => {
    if(todos.length == 1)  return
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const mytodo = JSON.parse(localStorage.getItem('todos'))
    if (mytodo) {
       dispatch(setTodos(mytodo))
    }  
}, []);

  return (
    <div className='container mx-auto  bg-green-600'>
     <h1 className='font-semibold text-white'>Current Learning Redux Toolkit</h1>
      <AddTodo/>       
      <Todo />       
    </div>
  )
}

export default App
