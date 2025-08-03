import { useState } from "react"

function list(){
    let [List,setList]= useState(["Apple","kola","lebu"])

function change2(){
        let x= document.getElementById("ohhyeah").value;
        document.getElementById("ohhyeah").value="";
        setList(L=>[...L,x]);
}
    return (
        <div>
            <h1>List of fruits</h1>
            <ol>
                {List.map((fruit,index)=>
                                (<li key={index}>{fruit}</li>)
                          )}
            </ol>
           
                <input type="text" placeholder="Add Fruits..." id="ohhYeah"/>
                <button onClick={change2}>Add Fruit</button>
            
        </div>
    );

}
export default list