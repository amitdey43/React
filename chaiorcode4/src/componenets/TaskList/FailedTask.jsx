import { useContext } from "react";
import { Authprovider } from "../../context/AuthContext";
function Failed({task,em,setEm,adminname}) {
    let {employees,setEmployees}= useContext(Authprovider);
    return ( 
        <div id="tbox1" className="faill">
                <div id="div">
                    <h3 id="h3">Fail</h3>
                    <h3>{task.taskDate}</h3>
                </div>
                <h2 id="last">Category: {task.category}</h2>
               <h1 id="maj">{task.taskTitle}</h1>
               <p>{task.taskDescription}</p>
               <div id="ektukaj">
                    <button id="faail">Failed</button>
               </div>
        </div>
     
    );
}

export default Failed;