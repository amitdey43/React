import React,{useState,useEffect,useCallback,useRef} from "react"
function App() {
  let [password,setPassword]= useState("");
  let [length,setLength]= useState(6);
  let [number,setNumber]= useState(false);
  let [character,setCharacter]= useState(false);
  let  inputbt= useRef();
  function change2(event){
    setLength(event.target.value)
  }
  function change3(){
    setNumber((n)=>!n);
  }
  function change4(){
    setCharacter((c)=>!c);
  }
  let change5= useCallback(()=>{
    inputbt.current?.select();
    window.navigator.clipboard.writeText(password);
  })
  let mainkhela= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number){
      str+="01234567890123456789"
    }
    if(character){
      str+="~!@#$%^&*(){}|\\[]:/?/'>.<,\""
    }
    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,number,character]);
  useEffect(()=>{
    mainkhela();
  },[length,number,character])
  return (
    <>
      <div>
        <h2>Password generator</h2>
        <div>
          <input type="text" placeholder="password" value={password} readOnly ref={inputbt}/>
          <button onClick={change5}>copy</button>
        </div>
        <div>
          <input type="range" min={6} max={50} value={length} onChange={change2} />
          <p>Length: {length}</p>
          <input type="checkbox" id="number" defaultChecked={number} onChange={change3}/>
          <label htmlFor="number">Numbers</label>

          <input type="checkbox" id="character" defaultChecked={character} onChange={change4}/>
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </>
  )
}

export default App
