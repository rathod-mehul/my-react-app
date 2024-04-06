import { createSlice } from "@reduxjs/toolkit";
import { logDOM } from "@testing-library/react";

export const StringSlice = createSlice({
    name: 'user',
    initialState: {
        value: 'chirag'
    },
    reducers: {
        saveUser: (state, action) => {
            // console.log('state ' + state.value);
            // console.log('action ' + action.payload);
            state.value = action.payload;
            // console.log('state ' + state.value);
        }
    }
})

export const { saveUser } =StringSlice.actions

export default StringSlice.reducer
