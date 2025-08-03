import {configureStore} from "@reduxjs/toolkit"
import khelaReducer from "../Slice/Slice"
export let store = configureStore({
    reducer:{
        khela:khelaReducer,
    }
})