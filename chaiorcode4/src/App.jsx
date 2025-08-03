import { useState } from 'react'
import { increase,decrease,byvalue } from './Slice/Slice'
import { useSelector,useDispatch } from 'react-redux'
function App() {
    let value= useSelector((state)=>state.khela.value);
    let dispatch= useDispatch();
    let [amount,setAmount]= useState(0);
 let khela1= ()=>{
    dispatch(increase());
 }
 let khela2= ()=>{
    dispatch(decrease());
 }
 let khela3= ()=>{
    dispatch(byvalue(amount));
 }
  return (
    <div>
        <p>Count: {value}</p>
        <button onClick={khela1}>+</button>
        <button onClick={khela2}>-</button>
        <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
        <button onClick={khela3}>jotoParoBarao</button>
    </div>
  )
}

export default App
