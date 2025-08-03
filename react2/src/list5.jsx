import React,{useState} from "react"
function list(){
    let [amit,setAmit]= useState({branch: "CSBS",
                                  roll: 9,
                                  acyear: "2nd"
                                })
    function change1(event){
        setAmit(a=>({...a,branch: event.target.value}))
    } 
    function change2(event){
        setAmit(a=>({...a,roll: event.target.value}))
    }                               
    function change3(event){
        setAmit(a=>({...a,acyear: event.target.value}))
    }                               
    return (
        <div>
            <p> Your details: {amit.branch}, {amit.roll}, {amit.acyear} </p>
            <label>
                Branch:
                <input type="text" value={amit.branch} onChange={change1}/>
            </label>
            <label>
                Roll:
                <input type="number" value={amit.roll} onChange={change2}/>
            </label>
            <label>
                Academic year:
                <input type="text" value={amit.acyear} onChange={change3}/>
            </label>
        </div>
    );
}
export default list