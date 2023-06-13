import React from 'react'
import { Box,Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
  const styleForSocialIcons = {
    backgroundColor:"white",
    borderRadius:"50%" ,
    width:"50px",
    height:"50px",
    color:"#f48225",
    "&:hover" : {
      boxShadow: "rgba(0, 0, 0, 0.5) 5px 5px 15px",
      color:"blue",
    }
  }
  return (
    <Box id="footer"
      sx={{padding:{sm:"10px 0",md:"20px 20px"}}}
      bgcolor="rgba(112, 182, 115, 1.00)"
    >
        <Typography gutterBottom fontWeight={600} letterSpacing={1} fontSize={25} >Social</Typography>
        <a href='https://www.linkedin.com/in/narendra-singh-khinchi/' target="_blank" style={{margin:"10px"}}>
            <LinkedInIcon sx={styleForSocialIcons}></LinkedInIcon>
        </a>
        <a href='https://github.com/NarendraSinghKhinchi' target="_blank" style={{margin:"10px"}}>
            <GitHubIcon sx={styleForSocialIcons}></GitHubIcon>
        </a>
        <a href='https://wa.me/917693922071' target="_blank" style={{margin:"10px"}}>
            <WhatsAppIcon sx={styleForSocialIcons}></WhatsAppIcon>
        </a>
        <a href='mailto:narendrasingh30324@gmail.com' target="_blank" style={{margin:"10px"}}>
            <EmailIcon sx={styleForSocialIcons}></EmailIcon>
        </a>
    </Box>
  )
}

export default Footer