import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./TodoList.css"

export default function localStorageTodo() {

    const [taskInput, setTastInput] = useState('');
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('todoList');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    // me
    const handleInputChange = (e) => {
        setTastInput(e.target.value);
    }
    const addTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, taskInput]);
            setTastInput('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    //update local storage whenever task are change

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(tasks));
    }, [tasks]);

    let onKeyDown = (e) => {
       
            if (e.keyCode === 13){
                return addTask();
            }
    }

    return (
        <div className="main">
            <div className="app">

                <h3 className="text-capitalize">my todo list App</h3>

                <input type="text" value={taskInput}
                    onChange={handleInputChange} onKeyDown={onKeyDown}
                    placeholder="Add your new todo" className="p-2" style={{ width: "78%" }} />

                <button onClick={addTask}
                    className="ms-1 p-2 fw-bolder" style={{ width: "18%" }}>+</button>
                <ul>
                    {tasks.map((h, index) => (
                        <li key={index}>
                            {h}
                            <button onClick={() => removeTask(index)}>delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}