import Header from "../../Edashe/Header";
import Task from "../../Edashe/Task";
import Tasklist from "../TaskList/Tasklist";
function Employee({em,setEm,logouterkhela,adminname}){
   
    
    return(
        <div className="ebap">
            <Header name={em.name} logouterkhela={logouterkhela}/>
            <Task em={em}/>
            <Tasklist em={em} setEm={setEm} adminname={adminname}/>
        </div>
    );
}
export default Employee