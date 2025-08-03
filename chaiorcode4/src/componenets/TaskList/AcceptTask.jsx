import { useContext,useEffect, useState } from "react";
import { Authprovider } from "../../context/AuthContext";
import { setlocalstorage } from "../../utilis/LocalStorage.jsx";
function AcceptTask({task,em,setEm,adminname}) {
    let {employees,setEmployees}= useContext(Authprovider);
    
    let faile= ()=>{
        setEmployees((employee)=>
            employee.map((emp)=>{
                if(emp.name==em.name){
                    return {
                        ...emp,
                        tasks: emp.tasks.map((tas)=>{
                            if(tas.taskTitle==task.taskTitle && tas.taskDate==task.taskDate && tas.taskDescription== task.taskDescription && tas.category==task.category){
                                return{
                                    ...tas,
                                    completed:false,
                                    active:false,
                                    newtask:false,
                                    failed:true,
                                };
                            }
                            return tas;
                        }),
                        taskCounts:{...emp.taskCounts,active:emp.taskCounts.active-1,failed:emp.taskCounts.failed+1}
                    };
                }
                return emp;
            })
        )
        
    }
    let complete= ()=>{
        setEmployees((employee)=>
            employee.map((emp)=>{
                if(emp.name==em.name){
                    return {
                        ...emp,
                        tasks: emp.tasks.map((tas)=>{
                            if(tas.taskTitle==task.taskTitle && tas.taskDate==task.taskDate && tas.taskDescription== task.taskDescription && tas.category==task.category){
                                return{
                                    ...tas,
                                    completed:true,
                                    active:false,
                                    newtask:false,
                                    failed:false,
                                };
                            }
                            return tas;
                        }),
                        taskCounts:{...emp.taskCounts,active:emp.taskCounts.active-1,completed:emp.taskCounts.completed+1}
                    };
                }
                return emp;
            })
        )
        
    }

    useEffect(()=>{
        if (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) > new Date(task.taskDate)) {
            faile();
        }
    },[])
    useEffect(()=>{
        if(employees){
            localStorage.setItem("employees",JSON.stringify(employees));
            let somossa= JSON.parse(localStorage.getItem("employeeData"));
            let somadhan= employees.find((emp)=>emp.email==somossa.email && emp.password==somossa.password);
            localStorage.setItem("employeeData",JSON.stringify(somadhan))
            setEm(somadhan)
        }
    },[employees])
    return ( 
        <div id="tbox1" className="active">
                <div id="div">
                    <h3 id="h3">Active</h3>
                    <h3>{task.taskDate}</h3>
                </div>
                    <h2 id="last">Category: {task.category}</h2>
               <h1 id="maj">{task.taskTitle}</h1>
               <p>{task.taskDescription}</p>
               <div id="kajnai">
                    <button onClick={complete} id="complete">Mark as Complete</button>
                    <button onClick={faile} id="fail">Mark as Failed</button>
               </div>
        </div>
    );
}

export default AcceptTask;