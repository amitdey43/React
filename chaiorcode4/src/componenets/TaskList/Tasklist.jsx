import AcceptTask from "./AcceptTask";
import Completed from "./CompleteTask";
import Failed from "./FailedTask";
import NewTask from "./NewTask";

function Tasklist({em,setEm,adminname}) {
        if(em.tasks.length>0){
            return ( 
                <div id="tbox">
                    {em.tasks.map((task,idx)=>{return task.newtask?<NewTask task={task} em={em} setEm={setEm} adminname={adminname} key={idx}/>:''})}
                    {em.tasks.map((task,idx)=>{return task.active?<AcceptTask task={task} em={em} setEm={setEm} adminname={adminname}  key={idx}/>:''})}
                    {em.tasks.map((task,idx)=>{return task.completed?<Completed task={task} em={em} setEm={setEm} adminname={adminname}  key={idx}/>:''})}
                    {em.tasks.map((task,idx)=>{return task.failed?<Failed task={task} em={em} setEm={setEm} adminname={adminname}  key={idx}/>:''})}     
                </div>
            );
        }
        else{
            return(
                <div id="tbox2">
                    <h1>No task assign to you</h1>
                </div>
            );
        }
}

export default Tasklist;