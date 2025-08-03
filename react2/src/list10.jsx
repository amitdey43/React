import React,{useState,useEffect} from "react"
function list(){
    let [time,setTime]= useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000)
    },[time])
    function lettime(){
        let hours= time.getHours();
        let minutes= time.getMinutes();
        let second= time.getSeconds();
        return `${p(hours)}:${p(minutes)}:${p(second)}`
    }
    let p = (number)=>{
        return (number<10)?"0"+number:number;
    }
    return(  
        <div>
            <div>
                <h1>{lettime()}</h1>
            </div>
        </div>
    );
}
export default list