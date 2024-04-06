import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";
import StringSlice from "./StringSlice";
import { countMiddleware } from "./middleware/countMiddleware";
import apiMiddleware from "./middleware/apiMiddleware";

export default configureStore({
    reducer: {
        counter: CounterReducer,
        user: StringSlice,
    },

    middleware: (getdefaultMiddleware) =>{
        return getdefaultMiddleware().concat(countMiddleware, apiMiddleware);
    }

})