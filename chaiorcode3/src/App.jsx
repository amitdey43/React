import { useEffect, useState } from "react"
import { TodoProvider } from "./Context"
import TodoItem from "./component/TodoItem"
import TodoForm from "./component/TodoForm"
function App(){
  let [todos,setTodos]= useState([])
  let addTodo= (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]) 
  }
  let updateTodo= (id,todo)=>{ 
    setTodos((prev)=>prev.map((pre)=>(pre.id===id?todo : pre )))
  }
  let deleteTodo= (id)=>{
    setTodos((prev)=>prev.filter((pre)=>pre.id!= id));
  }
  let toggleComplete= (id)=>{
    setTodos((prev)=>prev.map((pre)=>(pre.id===id? {...pre,completed: !pre.completed}: pre)))
  }
  useEffect(()=>{
      let to= JSON.parse(localStorage.getItem("todos"));
      if(to && to.length > 0){
        setTodos(to)
      }
  },[])
  useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
          <div>
                <div>
                      <h1>Manage Your Todos</h1>
                      <div>
                          <TodoForm/>
                      </div>
                      <div>
                          { 
                            todos.map((todo)=>(<div key={todo.id}>
                                <TodoItem todo={todo}/>
                            </div>))
                          }
                      </div>
                </div>
          </div>
    </TodoProvider>
  )
}

export default App
