import New from "./components/New"
import Column from "./components/Column"
import Header from "./components/Header"
import { getTodos } from "./app/todoSlice"
import { useSelector } from "react-redux"
import { DndContext, closestCorners } from "@dnd-kit/core"
// import { arrayMove } from "@dnd-kit/sortable"
import TodoContext from "./context/TodoContext"

function App(){
    let todos = useSelector(getTodos)
    // const {todos,setTodo} = useContext(TodoProvider)
    // const [todos,setTodos] = useState(useSelector(getTodos))
    // const getTodoPos = id => todos.findIndex(todo=>todo.id === id)

    // const upDateTodos = (data)=>{
    //     const originalPos = getTodoPos(active.id)
    //     const newPos = getTodoPos(over.id)
    //     return arrayMove(data,originalPos,newPos)
    // }

    // const handleDragEnd = (event)=>{
    //     const {active,over} = event
    //     if(active.id === over.id) return

    //     // todos = upDateTodos(todos)
    //     setTodo((todos) =>{
    //         const originalPos = getTodoPos(active.id)
    //         const newPos = getTodoPos(over.id)
    //         return arrayMove(todos,originalPos,newPos)
    //     })
    // }

    return(
        <>
            <TodoContext>
                <Header />
                <New />
                <DndContext 
                // onDragEnd={event=>handleDragEnd(event)} 
                collisionDetection={closestCorners}>
                    <Column todos={todos} 
                    // setTodos={setTodos}
                    />
                </DndContext>
            </TodoContext>
        </>
    )
}

export default App