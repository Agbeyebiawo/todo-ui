import React, { useState } from 'react'
import { addNewTodo } from '../app/todoSlice'
import { useDispatch } from 'react-redux'


const New = () => {
  const dispatch = useDispatch()
  const [title,setTitle] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(title === ''){
        return
    }else{
      dispatch(addNewTodo({title}))
      setTitle('')

    }
}
  return (
    <div className='form max-w-md mx-auto bg-white rounded-md'>
        <form className='flex flex-row gap-4 px-5 py-3' onSubmit={handleSubmit}>
            <div className="container w-6 h-6 bg-transparent border border-slate-500 rounded-full"></div>
            <input onChange={e=>setTitle(e.target.value)} type="text" name="todo" value={title} id="todo" placeholder='Create new todo...' className='flex-1 bg-transparent border-none text-gray-400'/>
        </form>
    </div>
  )
}

export default New