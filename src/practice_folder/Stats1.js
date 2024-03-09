import React from "react";
import  { useState } from "react";
function Stats1() {
    let [msg1, msg2] = useState(1);

    let clickEvent = () => {
        msg2(msg1 + 1);
    }

    let clickCapture = () => {

    }

    return (
        <div onClickCapture={clickCapture}>

            <div>{msg1}</div>
            <button onClick={clickEvent}>click Event</button>


        </div>
    );
}

export default Stats1;