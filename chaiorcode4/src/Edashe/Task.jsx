function Task({em}) {
    return ( 
        <div className="borobakso" >
            <div className="bakso" id="first">
                {em.taskCounts.newtask}<br/>New Task
            </div>
            <div className="bakso" id="second">
                {em.taskCounts.active}<br/>Active Task
            </div>
            <div className="bakso" id="third">
                {em.taskCounts.completed}<br/>Completed Task
            </div>
            <div className="bakso" id="fourth">
                {em.taskCounts.failed}<br/>Failed Task
            </div>
        </div>
     );
}

export default Task;