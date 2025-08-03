import React,{useState} from "react";
function list3(){
    let [name,setName]= useState("Guest");
    let [count ,setCount]= useState(1);
    let [text, setText]= useState("");
    let [stext,setstext]= useState("");
    let [rad,setRad]= useState("")
    function change(event){
        setName(event.target.value)
    }
    function change2(event){
        setCount(event.target.value)
    }
    function change3(event){
        setText(event.target.value)
    }
    function change4(event){
        setstext(event.target.value);
    }
    function change5(event){
        setRad(event.target.value);
    }
    return(

        <div>
            <input type="text" value={name} onChange={change}/>
            <p>Name: {name}</p>

            <input type="number" value={count} onChange={change2}/>
            <p>Count: {count}</p>

            <textarea value={text} onChange={change3} placeholder="ja parbe lekho"></textarea>
            <p>Text: {text}</p>
            <select value={stext} onChange={change4} className="ohh">
                    <option value="">Choose an option</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="PhonePay">PhonePay</option>
                    <option value="Paytm">PaytmGiftCard</option>
                    <option value="GiftCard">GiftCard</option>
            </select>
            <p>Option: {stext}</p>

            <label>
                <input type="radio" value="PickUp" onChange={change5} checked={rad==="PickUp"}/>
                PickUp
            </label>
            
            <label>
                <input type="radio" value="Deliverd" onChange={change5} checked={rad==="Deliverd"}/>
                Deliverd
            </label>
            <p>tutu: {rad}</p>
        </div>

    );
}
export default list3