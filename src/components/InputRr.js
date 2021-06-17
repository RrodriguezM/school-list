import React, { useState } from 'react'
import "./InputRr.css"

export function InputRr({ onChangeStatus, data }) {
    const [items, setItems] = useState(data)

    const handleChange = (event) => {
        console.log(event.target.id)
        console.log(event.target.value)
        setItems({ ...items, [event.target.id]: event.target.value });
        onChangeStatus(event)

    };


    return (
        <div className='flex-row-container'>
            {Object.entries(items).map(([key, value]) => (
                < div key={key} className='flex-row-item mt1' >
                    <input type="number" id={key} onChange={handleChange} min="0"></input>
                    <label className='ml2' htmlFor={key}>{key}</label>
                </div>
            ))}
        </div >
    )
}

// export default InputRr;
