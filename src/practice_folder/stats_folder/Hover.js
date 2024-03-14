import React from "react";
import { useState } from "react";

function Hover(){
    let [msg1,msg2] = useState("hover to add");
    let hoverEvent = () =>{
        msg2(msg1 + "+" + msg1);
    }

    return(
        <div>
            <div>{msg1}</div>
            <button onMouseOver={hoverEvent}>hover event</button>
        </div>
    );
}
export default Hover;