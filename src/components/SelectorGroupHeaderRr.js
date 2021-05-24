import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { BasicData } from '../BasicData'

export function SelectorGroupRr({ onChangeStatus }) {

    const [state, setState] = React.useState({
        country: false,
        ministry: false,
        utils: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        onChangeStatus(event)
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="country"
                        color="primary"
                    />
                }
                label={BasicData.country}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="ministry"
                        color="primary"
                    />
                }
                label={BasicData.ministry}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="utils"
                        color="primary"
                    />
                }
                label="Lista de Utiles Escolares"
            />
        </FormGroup>
    );
}
