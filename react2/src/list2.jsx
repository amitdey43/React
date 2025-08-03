import React,{useState} from "react"
let st = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: 700,
            margin: 0,
        }
function barabari(){
    let [count,setCount]= useState(0);
    function increase(){
        setCount(c=> c+1);
        setCount(c=> c+1);
        setCount(c=> c+1);
    }
    function decrease(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
    return(
        <div id="count" style={st}>
            <p>{count}</p>
            <div className="count1">
                <button onClick={increase}>Insrease</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    );
}
export default barabari