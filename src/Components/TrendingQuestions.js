import React from 'react'
import { buttonStyles } from '../MaterialUITheme/customStyles';
import {Box, Button} from '@mui/material'
import Post from './Post'
function TrendingQuestions() {
  const posts = [
        {
            title:"This is a dummy question",
            description:"Hello my name is narendra Singh and I am pretty much confused why is this not updatain fajf ljalf all jf  ljlf a ljlf sl ljl ajf  ljlkfja l ljalfj l lajlfj l lajfld l",
            tags:['java' , 'html', 'css'],
            answers:["this is the first anwer"],
            votes:0,
            views:0
        },
        {
            title:"this is a dummy question",
            description:"this is dummy description",
            tags:['java' , 'html', 'css'],
            answers:["this is the first anwer"],
            votes:0,
            views:0
        },
        {
            title:"this is a dummy question",
            description:"this is dummy description",
            tags:['java' , 'html', 'css'],
            answers:["this is the first anwer"],
            votes:0,
            views:0
        },
        {
            title:"this is a dummy question",
            description:"this is dummy description",
            tags:['java' , 'html', 'css'],
            answers:["this is the first anwer"],
            votes:0,
            views:0
        },
        {
            title:"this is a dummy question",
            description:"this is dummy description",
            tags:['java' , 'html', 'css'],
            answers:["this is the first anwer"],
            votes:0,
            views:0
        }
    ]
  return (
    <Box
        sx={{
            margin:"100px auto",
            width:{md:"800px",sm:"600px",xs:"90vw"},
            border:"1px solid rgb(0,0,0,0.3)",
            padding:"15px",
            height:"900px"
        }}
    >
        <Button  sx={{...buttonStyles,width:"200px"}} variant='contained'>Ask a Question</Button>
        <Box
            mt='25px'
        >
        {
            posts.map(post =>(
                <Post data={post} ></Post>
            ))
        }
        </Box>
    </Box>
  )
}

export default TrendingQuestions