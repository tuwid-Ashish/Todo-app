import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:2,text:"my love code",editable:false, checked:false},]
}



export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),    
                text: action.payload,
                editable:false
            }
            state.todos.push(todo)
         },
         setTodos:(state,action)=>{
            state.todos = action.payload
         },
         removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
         },
         ToggleTodo:(state,action)=>{
            state.todos.map((todo)=> todo.id === action.payload?todo.checked=!todo.checked:todo)
         }, 
          
         updateTodo: (state, action) => {
            state.todos.forEach((todo) =>{
                if (todo.editable) {
                    todo.text = action.payload;
                    todo.editable = !todo.editable;
                }
            });
        },
        expoid:(state,action)=>{
            state.todos.map((todo)=> todo.id === action.payload?todo.editable=!todo.editable:todo)
            

        }
                
          
    }
})

export const {addTodo, removeTodo, ToggleTodo, updateTodo,expoid,setTodos} = TodoSlice.actions

export const TodoReducer = TodoSlice.reducer