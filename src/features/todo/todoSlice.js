import { createSlice, nanoid } from "@reduxjs/toolkit"
import { act } from "react";

// reducers related to todoList

const initialState = {
    todos:[],
}



export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo ={
                id:nanoid(),
                task: action.payload,
                isDone:false,
            };
            state.todos.push(newTodo); // direct mutation
        },
        deleteTodo :(state,action)=>{
            // let id = action.payload;
            state.todos = state.todos.filter((todo)=>todo.id != action.payload);
        },
        marksAsDone: (state,action)=>{
            // let id = action.payload;
            state.todos = state.todos.map((todo)=>{
                return todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
            }
        )
        }, 


    }
})
export const {addTodo,deleteTodo,marksAsDone} = todoSlice.actions;

export default todoSlice.reducer;