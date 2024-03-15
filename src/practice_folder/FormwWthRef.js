import React, { useRef } from "react";

// print input value using state rafrence link
// https://medium.com/geekculture/using-react-hooks-to-get-input-value-9e0aa19b6b37
function FormWithRef() {
    let name = useRef();
    let lName = useRef();
    let mNumber = useRef();
    let password = useRef();

    function submitForm(e) {
        e.preventDefault();
        console.log(`your First name is: ${name.current.value}  your last name is :  ${lName.current.value}  your mobile number is :${mNumber.current.value}  your password is :     ${password.current.value}`);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" ref={name} placeholder="Firs Name" /><br />
                <input type="text" ref={lName} placeholder="last Name" /><br />
                <input type="text" ref={mNumber} placeholder="mobile number" /><br />
                <input type="text" ref={password} placeholder="password" /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default FormWithRef;