import React, { useContext } from 'react'
import {  withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { store } from '../../config/context/store'


//ini inisiasi props
// const theme = createMuiTheme({
//     palette: {
//         primary: green
//       }
//   })

  // ini untk buat props
const ColorButton = withStyles(() => ({
    root: {
      backgroundColor: teal[500],
      '&:hover': {
        backgroundColor: teal[700],
      },
    },
  }))(Button);

// ini untuk buat class
  // const useStyles = makeStyles((theme) => ({
  //   margin: {
  //     margin: theme.spacing(1),
  //   },
  // }));

  

function ButtonGenerator() {

  const GlobalState = useContext(store)
  const { dispatch } = GlobalState;

  // console.log(GlobalState.state.panjang)

  const { panjang } = GlobalState.state

  const GeneratorPassword = (len, arr) => {
      let pass = ""

      for( let i = len; i > 0; i-- ){
        pass += arr[ Math.floor( Math.random() * arr.length ) ]
      }
      dispatch({ type: 'GENERATOR_PASS', value: pass })
  }

 

    return (   
             <ColorButton size="large" color="primary" variant="contained" onClick={() => GeneratorPassword(panjang, '1234abcdABCD-_+&%$#@!')} >
                    <b> Generator Key </b> 
                </ColorButton>

      
    )
}

export default ButtonGenerator
