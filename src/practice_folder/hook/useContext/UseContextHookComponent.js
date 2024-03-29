import { useState, createContext, useContext } from "react";
import ChildComponent from "./ChildComponent";

export const UserContext = createContext();
export default function UseContextHookComponent(){
    const [user, setUser] = useState("person 1")
    return(
<>
<UserContext.Provider value={user}>
<h1>{`Hello ${user}!`}</h1>
<ChildComponent/>
</UserContext.Provider>
</>
    )
}