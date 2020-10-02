import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import { store } from '../../config/context/store'

function TexfieldGenerator() {

    const GlobalState = useContext(store)
    const { pass } = GlobalState.state
    return (
        <div>
            <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Your Password Here"
                        fullWidth
                        margin="normal"
                        value={pass}
                        InputProps={{
                            readOnly: true
                        }}
                        />
        </div>
    )
}

export default TexfieldGenerator
