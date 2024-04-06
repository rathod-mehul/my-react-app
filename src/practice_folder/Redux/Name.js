import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import StringSlice, { saveUser } from './StringSlice';
import { useNavigate } from 'react-router-dom';

export default function Name() {
    const name = useSelector((state) => state.user.value)
    const dispatch = useDispatch();

    let [userName, setUserName] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(saveUser(userName))
    };

    const handleChangeName = (firstName) => {
        setUserName(firstName.target.value)
    };
    return (
        <>
            <h1>your name is {name}</h1>

            <form action="" onSubmit={handleSubmitForm}>

                <input type="text" name="firstName" onChange={handleChangeName} placeholder="Enter Your Name" /> <br /><br />

                <button>submit</button>
            </form>
        </>
    )
}