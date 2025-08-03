import { useState } from "react";
import { UseTodo } from "../Context/Context.jsx";
function TodoForm(){
    let {addTodo} = UseTodo()
    let [todo,setTodo]= useState("");
    let khela = (e)=>{
        setTodo(e.target.value); 
    }
    function khelac(e){
        e.preventDefault();
        addTodo({todo,completed:false});
        setTodo("")
    }
    return (
        <div>
            <label htmlFor="input"></label>
            <input type="text" id="input" placeholder="Add Task" value={todo} onChange={khela}/>
            <button onClick={khelac}>Add Task</button>
        </div>
    );
}
export default TodoForm