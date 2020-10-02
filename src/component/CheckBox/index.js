import React, { useContext } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import { store } from '../../config/context/store'

function CheckBoxGenerator() {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const handleChange = (event) => {
        dispatch({ type: 'CHOOSE_LENGTH', value : event.target.value  })

      };

    return (
        
        <FormControl component="fieldset">
        <RadioGroup aria-label="password length" name="genpassword lengthder1" onChange={handleChange}>
            <div>
                <FormControlLabel value="20" control={<Radio />} label="20" />
                <FormControlLabel value="30" control={<Radio />} label="30" />
                <FormControlLabel value="40" control={<Radio />} label="40" />
            </div> 
        </RadioGroup>
      </FormControl>
         
      
    )
}

export default CheckBoxGenerator
