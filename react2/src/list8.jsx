import React,{useState} from "react"
function list(){
    let [car,setCar]= useState([])
    let [name,setname]= useState("");
    let [year,setyear]= useState(new Date().getFullYear());
    let [model,setModel]= useState("");
    
    function addcar(){
        let obj= {
            Carname: name,
            Caryear: year,
            Carmodel:model
        }
        setCar(c=>[...c,obj])

    }
    function removecar(event){
        event.preventDefault();
        let ck= event.target.elements[0].value.trim();
        event.target.elements[0].value="";
        car= car.filter((ca)=>ca.Carname!==ck);
        setCar(car);
    }
    function change1(event){
        setname(event.target.value.trim());kl
    }
    function change2(event){
        setyear(event.target.value)
    }
    function change3(event){
        setModel(event.target.value)
    }

    return (
        <div>
            <h1>Car list</h1>
            <ul>
                {car.map((ca,indx)=>(<li key={indx}>{ca.Carname} {ca.Caryear} {ca.Carmodel} </li>))}
            </ul>
            <input type="text" placeholder="Add car" onChange={change1}/>
            <br></br>
            <input type="number" value={year} onChange={change2}/>
            <br></br>
            <input type="text" placeholder="Add Model" onChange={change3}/>
            <br></br>
            <button onClick={addcar}>Add Car</button>
            <br></br>
            <form onSubmit={removecar}>
                <input type="text" placeholder="Remove car"/>
                <button>Remove a car</button>
            </form>
        </div>
    );
}
export default list