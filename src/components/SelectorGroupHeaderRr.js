import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export function SelectorGroupRr({ onChangeStatus, data }) {
    const [items, setItems] = useState(data)

    const handleChange = (event) => {
        setItems({ ...items, [event.target.name]: event.target.checked });
        onChangeStatus(event)
    };
    return (
        <FormGroup row>
            {Object.entries(items).map(([key, value]) => {
                // console.log(key, value)
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={value}
                                onChange={handleChange}
                                name={key}
                                color="primary"
                            />
                        }
                        label={key}
                        key={key}
                    />);
            })}
        </FormGroup>
    );
}
