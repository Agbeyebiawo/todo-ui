import { useState } from 'react'
import Todo from './Todo'
import { useSelector, useDispatch } from 'react-redux'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { getActive, getTodos, getCompleted, clearCompleted } from '../app/todoSlice'

const Column = ({todos}) => {
    const dispatch = useDispatch()
    const [filter,setFilter] = useState('all')

    switch(filter){
        case 'all':
            todos = useSelector(getTodos)
            break;
        case 'active':
            todos = useSelector(getActive)
            break;
        case 'completed':
            todos = useSelector(getCompleted)
            break;
        default:
           
            todos = useSelector(getTodos)
    }
  return (
    <>
        <div className='column bg-white min-h-80 rounded-md rounded-t-md max-w-md mx-auto mt-4 shadow-xl shadow-slate-200'>
            <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                {todos.map(todo=>(
                    <Todo id={todo.id} key={todo.id} data={todo} />
                ))}
            </SortableContext>
            {/* max-sm:hidden */}
            <div className='todo-details flex flex-row justify-between p-4 font-semibold text-slate-400 text-sm'>
                <span>{todos.length} items</span>
                <div className="col-span max-sm:hidden flex flex-row gap-4 font-semibold text-slate-500">
                    <span className='hover:text-slate-800 cursor-pointer' onClick={()=>setFilter('all')}>All</span>
                    <span className='hover:text-slate-800 cursor-pointer' onClick={()=>setFilter('active')}>Active</span>
                    <span className='hover:text-slate-800 cursor-pointer' onClick={()=>setFilter('completed')}>Completed</span>
                </div>
                <span className='cursor-pointer hover:text-slate-500' onClick={()=>dispatch(clearCompleted())}>Clear Completed</span>
            </div>
        </div>
        <div className="col-span-2 md:hidden max-w-md bg-white mx-auto mt-6 p-4 rounded-md flex justify-center items-center flex-row gap-4 font-semibold shadow-xl shadow-slate-200 text-slate-500">
            <span className='hover:text-slate-800 cursor-pointer' onClick={()=>setFilter('all')}>All</span>
            <span className='hover:text-slate-800 cursor-pointer' onClick={()=>setFilter('active')}>Active</span>
            <span className='hover:text-slate-800 cursor-pointer' onClick={()=>setFilter('completed')}>Completed</span>
        </div>
    </>
  )
}

export default Column