import { useContext ,useEffect} from "react";
import { Authprovider } from "../context/AuthContext";
function List() {
    let {employees,setEmployees}= useContext(Authprovider);
    let {userdata}= useContext(Authprovider);
    let deletemember = (i) => {
        let updatedEmployees = employees.filter((_, idx) => idx !== i);
        setEmployees(updatedEmployees);
    };
    useEffect(()=>{
        if(employees){
            localStorage.setItem("employees",JSON.stringify(employees));
        }
    },[employees])
    return ( 
        <div className="borolist">
            <div className="listerbaba">
                <h4 id="lastlast" className="ohhuff">Employee Name</h4>
                <h4 className="ohhuff">New Tasks</h4>
                <h4 className="ohhuff">Active Tasks</h4>
                <h4 className="ohhuff">Completed Tasks</h4>
                <h4 className="ohhuff">Failed Tasks</h4>
                <h4 className="ohhuff">Delete</h4>
                </div>
            <div id="chele">
                {userdata.edata.map((emp,idx)=>{
                    return (
                        <div className="list" key={idx}>
                            <h4 id="lastlast">{emp.name}</h4>
                            <h4>{emp.taskCounts.newtask}</h4>
                            <h4>{emp.taskCounts.active}</h4>
                            <h4>{emp.taskCounts.completed}</h4>
                            <h4>{emp.taskCounts.failed}</h4>
                            <button onClick={()=>deletemember(idx)} id="deletekoro" className="lal">Delete</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default List;