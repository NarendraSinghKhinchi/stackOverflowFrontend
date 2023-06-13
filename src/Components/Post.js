import React from 'react'
import { Box, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
function Post({data}) {
  const buttonLikeBoxStyles = {
    display:"inline-block",
    border:"1px solid rgb(0,0,0,0.2)",
    marginRight:"10px",
    padding:"0 5px",
    borderRadius:"5px",
    fontSize:'1em'
  }
  return (
    <Box
      border="1px solid rgb(0,0,0,0.2)"
      mb='10px'
      p='10px'
      borderRadius='10px'
    >
      <Typography sx={buttonLikeBoxStyles} >votes: {data.votes}</Typography>
      <Typography sx={buttonLikeBoxStyles} >answers: {data.answers.length}</Typography>
      <Typography sx={buttonLikeBoxStyles}  >views: {data.views}</Typography>
      <Link style={{textDecoration:"none",color:"#000"}}>
        <Typography fontSize={22} 
          fontWeight={500}
          sx={{
            cursor:"pointer",
            "&:hover":{color:"blue"}
          }}
        
        >{data.title}</Typography>
        
      </Link>
      <Typography gutterBottom >
        {
          data.description.length <= 100 ? data.description :
          data.description.substring(0,100).concat(".....")
        }
      </Typography>
      {
        data.tags.map(tag =>(
          <Typography sx={buttonLikeBoxStyles} >{tag}</Typography>
        ))
      }
    </Box>
  )
}

export default Post