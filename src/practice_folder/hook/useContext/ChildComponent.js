import {useState, createContext, useContext} from "react";
import {UserContext} from "./UseContextHookComponent";

export default function ChildComponent(){
    const user = useContext(UserContext);

    return(
        <>
        <h1>component 2</h1>
        <h2>{`Hello ${user} again!`}</h2>
        <p>this is a child component</p>
        </>
    )
}