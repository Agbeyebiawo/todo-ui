import React from 'react'
import CrossIcon from "../assests/images/icon-cross.svg"
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useDispatch } from 'react-redux'
import { deleteTodo, markAsComplete } from '../app/todoSlice'
import CheckIcon from "../assests/images/icon-check.svg"

const Todo = ({data}) => {
  const {id,title,completed} = data
  const dispatch = useDispatch()
  const {setNodeRef,attributes,listeners,transform,transition} = useSortable({id:data.id})

    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    }
  return (
    <>
      <div 
        // ref={setNodeRef} {...attributes} {...listeners} style={style} 
        className='todo bg-transparent text-slate-600 font-semibold flex flex-row gap-4 px-5 py-3 border-b-2'>
        <div 
          onClick={()=>dispatch(markAsComplete({id}))}
          className={(completed) ? 
          "checked container w-6 h-6 bg-transparent cursor-pointer border flex items-center justify-center border-slate-500 rounded-full" : 
          "container w-6 h-6 bg-transparent cursor-pointer border flex items-center justify-center border-slate-500 rounded-full"}
          >
          {completed ? (<img src={CheckIcon} alt='check mark'/>) : null}
        </div>
        <p 
          style={(data.completed === true) ? {textDecoration: 'line-through'} : null} 
          className='todo-title flex-1 flex flex-row justify-between items-center'>
            {title}
            <button onClick={()=>dispatch(deleteTodo({id}))}><img src={CrossIcon} alt="cancel" className='image md:hidden'/></button>
        </p>
      </div>
    </>
  )
}

export default Todo
