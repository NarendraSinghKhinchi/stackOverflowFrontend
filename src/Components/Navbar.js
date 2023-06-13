import React from 'react' ;
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.svg' ;
import { Box, Button } from '@mui/material';
import { buttonStyles } from '../MaterialUITheme/customStyles';
function Navbar() {
  
  return (
    <Box
      bgcolor='#ffffff'
      position='fixed'
      left='0'
      top='0'
      right='0'
      zIndex='1100'
      pt='5px'
      borderBottom='1px solid'
      sx={{
        // width:"100%",
        display:"flex",
        justifyContent:"space-between"
      }}
    >
      <Link to="/">
        <img src={logo} style={{
          width:"50px",
          height:"50px",
          marginLeft:"10px"
        }} alt='logo'></img>
      </Link>
      
      <div>
        <Button  sx={{...buttonStyles,marginRight:"10px"}} variant='contained'>Log In</Button>
        <Button  sx={{...buttonStyles,marginRight:"10px"}} variant='contained'>Sign Up</Button>
      </div>
    </Box>
  )
}

export default Navbar
// f48225 color code for light orange color used in stack overflow