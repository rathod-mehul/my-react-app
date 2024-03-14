import React, {useEffect} from "react";

export default function SubFunctionHookComponent(){

    useEffect(() =>{
        return () => console.log('Component hidden');
    });

    return(
        <div>
        sub Functional Component
        </div>
    )
}