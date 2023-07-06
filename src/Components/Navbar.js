import React from 'react' ;
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.svg' ;
import { Box, Button } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { loggedOut } from './Slices/userSlice';

function Navbar() {
  
  const userStatus = useSelector(state => state.user.status);
  const dispatch = useDispatch();
  const handleLogOut = ()=>{
    dispatch(loggedOut());
  }
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
        justifyContent:"space-between",
      }}
    >
      <Link to="/"
        style={{textDecoration:"none"}}
      >
        <img src={logo} style={{
          width:"50px",
          height:"50px",
          marginLeft:"10px"
        }} alt='logo'></img>
        Home
      </Link>
      {
        userStatus === 'logged out' ?
        (  
          <div>
            <Link to='/user/login'>
              <Button className='btn' sx={{marginRight:"10px"}} variant='contained'>Log In</Button>
            </Link>
            <Link to='/user/register'>
              <Button className='btn'  sx={{marginRight:"10px"}} variant='contained'>Sign Up</Button>
            </Link>
          </div>
        )
        :
        (
          <Button onClick={handleLogOut} className='btn' sx={{marginRight:"10px"}} variant='contained'>Log out</Button>
        )
      }
    </Box>
  )
}

export default Navbar
// f48225 color code for light orange color used in stack overflow