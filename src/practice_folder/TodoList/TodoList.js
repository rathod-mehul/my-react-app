import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (inputValue.trim() !== "") {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    }

    const handleRemoveTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos)
    }
 
    return (
        <div className="main">
            <div className="app">

                <h3 className="text-capitalize">my todo list App</h3>

                <input type="text" value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add your new todo" className="p-2" style={{ width: "78%" }} />

                <button onClick={handleAddTodo}
                    className="ms-1 p-2 fw-bolder" style={{ width: "18%" }}>+</button>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleRemoveTodo(index)}>delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};