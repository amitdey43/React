import { useContext ,useEffect, useState} from "react";
import { Authprovider } from "../../context/AuthContext";
import { getlocalstorage, setlocalstorage } from "../../utilis/LocalStorage.jsx";
function NewTask({task,em,setEm,adminname}) {
    let {employees,setEmployees}= useContext(Authprovider);
    let ami=adminname.name;
    let accept= ()=>{
        setEmployees((employee)=>
            employee.map((emp)=>{
                if(emp.name==em.name){
                    return {
                        ...emp,
                        tasks: emp.tasks.map((tas)=>{
                            if(tas.taskTitle==task.taskTitle && tas.taskDate==task.taskDate && tas.taskDescription== task.taskDescription && tas.category==task.category){
                                return{
                                    ...tas,
                                    newtask:false,
                                    active:true,
                                };
                            }
                            return tas;
                        }),
                        taskCounts:{...emp.taskCounts,active:emp.taskCounts.active+1,newtask:emp.taskCounts.newtask-1}
                    };
                }
                return emp;
            })
        )
        
    }
    let {setUserdata}= useContext(Authprovider);
    useEffect(()=>{
    if(employees){
        localStorage.setItem("employees",JSON.stringify(employees));
        // let {edata,adata}= getlocalstorage();
        // setUserdata({edata,adata});
        let somossa= JSON.parse(localStorage.getItem("employeeData"));
        let somadhan= employees.find((emp)=>emp.email==somossa.email && emp.password==somossa.password);
        localStorage.setItem("employeeData",JSON.stringify(somadhan))
        setEm(somadhan);
    }
    },[employees])
    return ( 
        <div id="tbox1" className="newtask">
                <div id="div">
                    <h3 id="h3">New Task</h3>
                    <h3>{task.taskDate}</h3>
                </div>
                <h2 id="last">Category: {task.category}</h2>
               <h1 id="maj">{task.taskTitle}</h1>
               <p>{task.taskDescription}</p>
               <div>
                    <button onClick={accept} id="accept">Accept</button>
               </div>
        </div>
    );
}

export default NewTask;