import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, expoid, ToggleTodo, addTodo } from '../../Features/Todo/TodoSlice';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
function Todo() {
    const todos = useSelector(state => state.todos)
    console.log("my todo redux", todos);
    const dispatch = useDispatch()
    return (
        <>
            <div className='font-semibold uppercase text-white'>Todos : </div>
            <ul className="list-none md:w-11/12 mx-auto w-full">
                {todos?.map((todo) => (
                    <li
                        className={`mt-4 flex justify-between items-center  px-4 py-2 rounded  ${todo.checked ? "bg-[#659ee0]" : "bg-zinc-800"
                            }`}
                        key={todo.id}
                    >
                        <div className='content flex gap-5'>
                            <input
                                type="checkbox"
                                className="cursor-pointer h-6 w-6"
                                checked={todo.checked}
                                onChange={() => dispatch(ToggleTodo(todo.id))}
                            />

                            <div className={`text-white ${todo.checked ? "line-through" : " "}`}>{todo.text}</div>
                        </div>
                        <div className="btns flex ">

                            <button onClick={() => dispatch(expoid(todo.id))}
                                className={`text-white bg-red-500 border-0  mx-3  focus:outline-none hover:bg-red-600 rounded text-md ${todo.checked ? "hidden" : " "}`}
                            >
                                <PencilSquareIcon className="h-8 w-8 p-1" />
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className={`text-white bg-red-500 border-0  mx-3  focus:outline-none hover:bg-red-600 rounded text-md ${todo.checked ? "hidden" : " "}`}
                            >
                                <TrashIcon className="h-8 w-8 p-1" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo
