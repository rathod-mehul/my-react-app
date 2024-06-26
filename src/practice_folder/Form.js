import React, { useState } from 'react'

 function Form() {
    let [name, setName] = useState('');
        const [isValid, setIsValid] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            console.log('your form is submit');
        } else {
            alert('Please enter your name name');
        }
    };

    let inputName = (e) => {
        if (e.target.value === '') {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
        setName(e.target.value)
    }   

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={name} onChange={inputName} placeholder='Name' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}



export default Form;