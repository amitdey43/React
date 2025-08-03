import { useContext,createContext } from "react";
export let Cusecontext= createContext({
    todos:[ 
        {
            id:1,
            todo:"Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id,todo)=>{},
    toggleComplete: (id)=>{}
});
export let UseTodo = ()=>{
    return useContext(Cusecontext)
}
export let TodoProvider= Cusecontext.Provider;