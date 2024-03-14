import { useState } from "react";

export default function UseCounters(initialValue = 0){
    const [count, setCount] = useState(initialValue)

    const increment = () => setCount(count+1)

    return [count,increment]
    
}