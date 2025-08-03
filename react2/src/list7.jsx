import React,{useState} from "react"
function list(){
    let [lfruit,setLfruit]= useState(["apel","kola","lebu"]);
    function add(event){
        event.preventDefault();
        let nfruit= event.target.elements[0].value.trim();
        event.target.elements[0].value="";
        setLfruit(l=>[...l,nfruit]);
    }
    function remove(index){
        let listfruit=[]
        listfruit= lfruit.filter((ele,idx)=>idx != index);
        
        setLfruit(listfruit);
    }
    return(
        <div>
            <h1>Fruits</h1>
            <ul>
                {lfruit.map((fruit,index)=>(<li key={index} id="click" onClick={()=>remove(index)}>{fruit}</li>))}
            </ul>
            <form onSubmit={add}>
                <input type="text" placeholder="Add fruits..." />
                <button>Add Fruit</button>
            </form>
        </div>
    );
}
export default list