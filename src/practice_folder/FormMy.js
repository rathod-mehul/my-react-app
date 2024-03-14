import React, { useState } from 'react'

export default function Form() {
    let [name, setName] = useState('');
    let [dropdown, setDropdown] = useState('');

    let inputName = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <form>
                <input type="text" value={name} onChange={inputName} placeholder='Name' />

                <select value={dropdown} onChange={(e) => setDropdown(e.target.value)} >
                    <option value="">Select Standard</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
