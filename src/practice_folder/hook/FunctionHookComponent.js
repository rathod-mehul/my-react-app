import { useEffect, useState } from "react";
import SubFunctionHookComponent from "./SubFunctionHookComponent"

function FunctionHookComponent() {
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [visibility, setVisibility] = useState(true);

    useEffect(() => {
        console.log('Componet initailzed');
    });

    useEffect(() => {
        console.log('count increased');
    }, [count]);

    useEffect(() => {
        console.log('index increased');
    }, [index]);

    let countIncrease = () => {
        setCount(count + 1);
    }

    let indexIncrease = () => {
        setIndex(index + 1);
    }

    let changeVisibility = () => {
        setVisibility(!visibility);
    }


    return(
        <>
        <h1>Function LifeCycle</h1>
        {visibility ? <SubFunctionHookComponent/> : ''}
        <button onClick={countIncrease}>count {count}</button>
        <button onClick={indexIncrease}>index {index}</button>
        <button onClick={changeVisibility}>{visibility ? 'Hide' : 'Show'}</button>
        </>
    )
}

export default FunctionHookComponent;