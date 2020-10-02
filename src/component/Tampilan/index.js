import React  from 'react'
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import key from '../../asset/key.svg'
import './style.css'
import ButtonGenerator from '../Button'
import TextfieldGenerator from '../Texfield'
import CheckBoxGenerator from '../CheckBox';




function Tampilan() {


    return (
    <div>
        <Container maxwidthmd="true" style={{ marginTop: "2rem" }} >
        <Box display="flex" justifyContent="center">
            <h1 className="text" > 
            Password Generator
            </h1>
        </Box>

        <Box display="flex" justifyContent="center" mt="6rem">
            <img src={key} alt=" "  width="150rem" height="150rem"/>
        </Box>

        <Container className="length-coiche" >
            <Box display="flex" justifyContent="center"  >
            <CheckBoxGenerator/>
            </Box>
        </Container>

        <Box color="text.primary" display="flex" flexDirection="column" justifyContent="center" clone my="auto" mx="auto">
            <Box mt="5rem" width="20rem">

                <Container style={{ marginBottom: "2rem", width: "20rem", paddingLeft: "8px" }} mx="auto">
                    <TextfieldGenerator/>
                </Container>
             <ButtonGenerator/>
            </Box>
        </Box>
        </Container>
    </div>
    )
}

export default Tampilan
