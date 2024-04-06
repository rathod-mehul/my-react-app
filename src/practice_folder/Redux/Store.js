import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import StringSlice from "./StringSlice";

export default configureStore({
    reducer:{
        counter:CounterReducer,
        user: StringSlice,
    }
})