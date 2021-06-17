import React, { useState } from 'react'
import "./InputTextRr.css"

export function InputTextRr({ onChangeStatus, data }) {
    const [items, setItems] = useState(data)

    const handleChange = (event) => {
        console.log(event.target.id)
        console.log(event.target.value)
        setItems({ ...items, [event.target.id]: event.target.value });
        onChangeStatus(event)

    };

    return (
        <div>
            {Object.entries(items).map(([key, value]) => (
                < div key={key} >
                    <label className='f6 b db mb2' htmlFor={key}>{key}</label>
                    <input className='input-reset ba b--black-20 pa2 mb2 db w-100' type="text" id={key} onChange={handleChange} value={value}></input>
                </div>
            ))}
        </div >
    )
}
