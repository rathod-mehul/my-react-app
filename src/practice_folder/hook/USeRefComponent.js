import { useRef, useState, useEffect } from "react";
import UseCounters from "./UseCounter";

export default function UseRefComponent() {
    // let [count, setCount] = useState(0);
    let inputRef = useRef(null);
    const [count, setCount] = UseCounters();

    let changeInput = () => {
        setCount();
    }

    useEffect(() => {
        console.log('comonent rendered...');
    })

    return (
        <>
            <p>{count}</p>
            <input type="text" ref={inputRef} />
            <button onClick={changeInput}>Click</button>
        </>
    )
}