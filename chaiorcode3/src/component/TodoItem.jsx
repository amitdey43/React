import { UseTodo } from "../Context/Context.jsx";
import { useState } from "react";
function TodoItem({todo}){
 let {deleteTodo,updateTodo,toggleComplete} = UseTodo(); 
 let [edit,setEdit]= useState(false);
 let [msg,setMsg]= useState(todo.todo)
 function khela1(){
    toggleComplete(todo.id);
 }
 function editable(){
    setEdit(!edit);
 }
 function khela2(e){
    setMsg(e.target.value)
    updateTodo(todo.id,{...todo,todo:msg})
 }
 function khela3(){
    deleteTodo(todo.id)
 }
 return (
    <div className={todo.completed? "sotti" : "mittha" }>
        <input type="checkbox" checked={todo.completed} onChange={khela1}/>
        <input type="text" value={msg} readOnly={!(edit && !todo.completed)} onChange={khela2}/>
        <button onClick={editable} disabled={todo.completed}>Edit</button>
        <button onClick={khela3}>Delete</button>
    </div>
 );
}
export default TodoItem