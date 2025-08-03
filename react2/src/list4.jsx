import React,{ useState } from "react"

function khela(){
    let [color,setColor]= useState("#ffffff")
    function change(event){
        setColor(event.target.value);
    }
    return (
        <div className="khelac">
            <div style={{backgroundColor:color}} className="khelac2">
                <p>Color code: {color}</p>
            </div>
            <label htmlFor="kk">Pick a  color: </label>
            <input type="color" value={color} onChange={change} id="kk"/>
        </div>
    );
}
export default khela