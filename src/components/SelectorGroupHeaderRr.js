import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export function SelectorGroupRr({ onChangeStatus, data }) {

    const [state, setState] = React.useState({
        country: false,
        ministry: false,
        utils: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        onChangeStatus(event)
    };

    // console.log(Object.keys(data))
    return (
        <FormGroup row>
            {Object.keys(data).map((item) => {
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name={item}
                                color="primary"
                            />
                        }
                        label={item}
                        key={item}
                    />);
            })}
        </FormGroup>
    );
}
