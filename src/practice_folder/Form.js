import React, { useState } from 'react'

 function Form() {
    let [name, setName] = useState('');
    let [dropdown, setDropdown] = useState('');
    const [isValid, setIsValid] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            console.log('submitted');
        } else {
            alert('Please enter name');
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