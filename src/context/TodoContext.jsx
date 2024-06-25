import React, { createContext, useState } from 'react'

export const TodoProvider = createContext();

const TodoContext = (props) => {
    const [todos, setTodo] = useState([{
        id:1,
        title: "play games",
        checked: false
    }])

    const [theme, setTheme] = useState("dark");

    const todoLength = todos.length;

    const addTodo = (newTask)=>{
        newTask.id = todos.length+1;
        setTodo([...todos,newTask]);
        console.log(newTask)
    }

    const deleteTodo = (id)=>{
        // const newTodo = todos.filter(task=> task.id !== id)
        setTodo(todos.filter(task=> task.id !== id));
        // setTodo(newTodo)
    }

    const checkTodo = (id)=>{
        const newTask = todos.map(task=> task.id === id ? {...task, checked: !task.checked} : task);
        // setTodo(newTask)
        setTodo(newTask)
    }
    
  return (
    <>
    <TodoProvider.Provider value={{
        todos, todoLength, setTodo, 
        addTodo, deleteTodo, checkTodo, 
        theme, setTheme
    }}>
        {props.children}
    </TodoProvider.Provider>
    </>
  )
}

export default TodoContext;