import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    value: 0
}
export let slice= createSlice({
    name:"khela",
    initialState,
    reducers:{
        increase: (state)=>{
            state.value+=1;
        },
        decrease: (state)=>{
            state.value-=1;
        },
        byvalue: (state,action)=>{
            state.value+=Number(action.payload);
        }
    }
})
export let {increase,decrease,byvalue} = slice.actions;
export default slice.reducer