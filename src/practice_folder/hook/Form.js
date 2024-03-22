import { useRef } from "react";
import MyInput from "./MyInput";



function Form(){
    const ref = useRef(null);

    function ClickButton(){
        ref.current.focus();
    }
    return(
        <>
        <MyInput ref={ref}/>
        <button type="button" onClick={ClickButton}>Focus the input</button>
        </>
    )
}



export default Form;