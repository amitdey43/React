import React,{useState} from "react"
function list(){
    let [name, setname]= useState("Guest");
    let [age, seta]= useState(0);
    let [isKhela ,setKhela] = useState(false)
    function set(){
        setname("Amit Kumar dey");
    }
    function setaa(){
        seta(++age);
    }
    function setk(){
        setKhela(!isKhela)
    }
    return(
        <div>
            <p>name: {name}</p>
            <button onClick={set}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={setaa}>Insrease age</button>
            <p>Khela: {isKhela?"Yes":"No"}</p>
            <button onClick={setk}>Change status</button>
        </div>
    );
}
export default list