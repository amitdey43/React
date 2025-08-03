import React,{useState} from "react"
function list(){
    let [dolist,setDolist]= useState(["Car wash","Study"]);
    let [doo,setDoo]= useState("");
    function addtask(){
        if(doo.trim()!=""){
            setDolist(d=>[...d,doo]);
            setDoo("")
        }
    }
    function change1(event){ 
        setDoo(event.target.value);
    } 
    function deletetask(index){  
        let nlist= dolist.filter((_,i)=>i!=index);
        setDolist(nlist)
    }  
    function upward(idx){
        if(idx>0){
            let utask= [...dolist];
            [utask[idx],utask[idx-1]]= [utask[idx-1],utask[idx]];
            setDolist(utask);
        }
    }
    function downward(idx){
        if(idx<dolist.length-1){
            let utask= [...dolist];
            [utask[idx],utask[idx+1]]= [utask[idx+1],utask[idx]];
            setDolist(utask);
        }
    }
    return (
        <div>
            <h1>To Do List</h1>
            <input type="text" value={doo} placeholder="Add task..." onChange={change1}/>
            <button onClick={addtask}>Add Task</button>
            <div>
                <ol>
                    {dolist.map((lst,index)=>(
                        <li key={index}>
                            {lst}
                            <button onClick={()=>deletetask(index)}>Delete</button>
                            <button onClick={()=>upward(index)}>👆</button>
                            <button onClick={()=>downward(index)}>👇</button>
                        </li>
                    ))}
                </ol>
            </div> 
        </div>
    );
}
export default list