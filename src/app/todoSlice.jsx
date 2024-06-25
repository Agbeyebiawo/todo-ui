import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addNewTodo:(state,action)=>{
            const {title} = action.payload
            state.todos.unshift({
                id: state.todos.length+1,
                title,
                completed:false
            })
        },
        markAsComplete:(state,action)=>{
            const {id} = action.payload
            const todoExist = state.todos.find(todo=>todo.id === id)
            if(todoExist){
                if(todoExist.completed === false){
                    todoExist.completed = true
                }else{
                    todoExist.completed = false
                }
            }
        },
        deleteTodo:(state,action)=>{
            const {id} = action.payload
            const todoExist = state.todos.find(todo=>todo.id === id)
            if(todoExist){
                state.todos.splice(state.todos.indexOf(todoExist),1)
                // state.todos.splice(todoExist,1)
            }
        },
        clearCompleted:(state)=>{
            const completedTodos = state.todos.filter(todo=>todo.completed === true)
            for(let todo of completedTodos){
                if(state.todos.includes(todo)){
                    state.todos.splice(state.todos.indexOf(todo),1)
                }
            }
        }
    }
})

export const getTodos = (state)=> state.todos.todos
export const getActive = (state)=> state.todos.todos.filter(todo=>todo.completed === false)
export const getCompleted = (state)=> state.todos.todos.filter(todo=>todo.completed === true)
export const {addNewTodo,markAsComplete,deleteTodo,clearCompleted} = todoSlice.actions
export default todoSlice.reducer