import React from 'react'
import { Box, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
function Post({data}) {
  // console.log(data);
  return (
    <Box
      border="1px solid rgb(0,0,0,0.2)"
      mb='10px'
      p='10px'
      borderRadius='10px'
    >
      <Typography className='btn_l_box' >votes: {data.votes}</Typography>
      <Typography className='btn_l_box' >answers: {data.answers.length}</Typography>
      <Typography className='btn_l_box'  >views: {data.views}</Typography>
      
      <Link 
        to= {`/question/${data._id}`}
        style={{textDecoration:"none",color:"#000"}}
      >
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
          <Typography gutterBottom key={tag} className='btn_l_box' >{tag}</Typography>
        ))
      }
    </Box>
  )
}

export default Post