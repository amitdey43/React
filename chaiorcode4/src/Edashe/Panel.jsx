import { useState ,useContext,useEffect} from "react";
import { Authprovider } from "../context/AuthContext";
import { setlocalstorage } from "../utilis/LocalStorage.jsx";

function Panel() {
    let [text,setText]= useState("")
    let [date,setDate]= useState("")
    let [assign,setAssign]= useState("")
    let [category,setCategory]= useState("")
    let [description,setDescription]= useState("")
    let {employees,setEmployees}= useContext(Authprovider);
    
    let terabaap= (e)=>{
        e.preventDefault();
        if(employees){
            let ee= employees.find((emp)=>emp.name==assign.toUpperCase().trim());
            if(ee){
                let kk=ee.tasks.find((emp)=>emp.taskTitle==text.trim() && emp.taskDescription==description.trim() && emp.taskDate==date && emp.category==category.trim())
                if(kk){
                    alert("This task is alreay assign to this user");
                }
                else{
                    let task={
                        "active":false,
                        "newtask":true,
                        "completed":false,
                        "failed":false,
                        "taskTitle": text.trim(),
                        "taskDescription": description.trim(),
                        "taskDate": date,
                        "category": category.trim(),
                    }
                    setEmployees((employee)=>employee.map((emp)=>{
                        if(emp.name==assign.toUpperCase().trim()){
                            return {
                                ...emp,
                                tasks:[...emp.tasks,task],
                                taskCounts:{...emp.taskCounts,newtask:emp.taskCounts.newtask+1}
                            }
                        }
                        return emp;
                    }));
                }
            }
            else{
                alert("This user does not exsist")
            }
        }

        // let task={
        //     "active":false,
        //     "newtask":true,
        //     "completed":false,
        //     "failed":false,
        //     "taskTitle": text,
        //     "taskDescription": description,
        //     "taskDate": date,
        //     "category": category,
        // }
        // setEmployees((employee)=>employee.map((emp)=>{
        //     if(emp.name==assign){
        //         return {
        //             ...emp,
        //             tasks:[...emp.tasks,task],
        //             taskCounts:{...emp.taskCounts,newtask:emp.taskCounts.newtask+1}
        //         }
        //     }
        //     return emp;
        // }));
        setAssign("");
        setCategory("");
        setDate("");
        setDescription("")
        setText("");

    }
    useEffect(()=>{
        if(employees){
            localStorage.setItem("employees",JSON.stringify(employees));
        }
    },[employees])
    
    return ( 
        <div id="ba">
            <form className="dibba" onSubmit={terabaap}>
            <div id="dibba1">
                <label htmlFor="taskt">Task Title</label>
                <input required type="text" id="taskt" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Make a react app"/>
                <label htmlFor="date">Date</label>
                <input required type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} id="date" />
                <label htmlFor="ass">Assign to</label>
                <input required type="text" value={assign} onChange={(e)=>{setAssign(e.target.value)}} id="ass" placeholder="Employee name"/>
                <label htmlFor="cat">Catagory</label>
                <input required type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} id="cat" placeholder="design,dev etc"/>
            </div>
            <div id="dibba2">
                <label htmlFor="textarea">Description</label>
                <textarea id="textarea" required value={description} onChange={(e)=>{setDescription(e.target.value)}} rows={12}/>
                <button id="ctask" className="sobug">Create Task</button>
            </div>
            </form>
        </div>
     );
}

export default Panel;