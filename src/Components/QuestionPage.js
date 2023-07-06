import React,{useRef, useState} from 'react'
import Navbar from './Navbar'
import { Box, Button, Typography} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { postAnswer } from './Slices/answerSlice';
import Answers from './Answers';
function QuestionPage() {
    const { postId } = useParams() ;
    const ansRef = useRef();
    const [text,setText] = useState('');
    const [showAnsBtn,setShowAnsBtn] = useState(true);
    const userId = useSelector(state => state.user.id);
    const question = useSelector(state => state.posts.postData.find(post => post._id === postId));
    const dispatch = useDispatch();

    const handleAnswerBtnClick = ()=>{
        if(!userId){
            alert("Thank you for showing interest. Please login first");
            return ;
        }
        ansRef.current.style.height = '400px'
        ansRef.current.style.padding = '15px'
        setShowAnsBtn(false);
    }
    const handlePostBtnClick = ()=>{
        ansRef.current.style.height = '0px'
        ansRef.current.style.padding = '0px'
        setShowAnsBtn(true);
        const data = {
            author:userId,
            content:text,
            likes:0
        }
        dispatch(postAnswer({data,id:postId}));
    }
    return (
        question ?
    <>  
        <Navbar></Navbar>
        <Box
            sx={{
                margin:"100px auto",
                width:{md:"800px",sm:"600px",xs:"90vw"},
                border:"1px solid rgb(0,0,0,0.3)",
                padding:"15px",
                maxHeight:"900px",
                borderRadius:"5px",
            }}
        >
            <Typography className='btn_l_box' >votes: {question.votes}</Typography>
            <Typography className='btn_l_box' >answers: {question.answers.length}</Typography>
            <Typography className='btn_l_box'  >views: {question.views}</Typography>
      
            <Typography fontSize={22}
                fontWeight={500}
                gutterBottom
            >{question.title}</Typography>
            <Typography fontSize="1.1em"
                lineHeight={1.2}
                gutterBottom
            >{question.description}</Typography>
            
            {showAnsBtn ? 
                <Button onClick={handleAnswerBtnClick} className='btn' sx={{width:"150px",marginRight:"10px"}} variant='contained'>
                    Answer
                </Button>
                : 
                <Button onClick={handlePostBtnClick} className='btn' sx={{width:"150px",marginRight:"10px"}} variant='contained'>
                    Post
                </Button>
            }
            <Button className='btn' sx={{width:"150px"}} variant='contained'>
                <ArrowUpwardIcon></ArrowUpwardIcon>
                upvote
            </Button>
            <textarea 
                style={{
                    display:"block",
                    marginTop:"10px",
                    height:"0",
                    width:"100%",
                    backgroundColor:"rgb(0,0,0,0.3)",
                    fontSize:"16px",
                    resize:"none",
                    border:"none",
                    outline:"none",
                    borderRadius:"10px",
                    boxSizing:"border-box",
                    padding:"0",
                    transition:"0.5s",
                }}
                placeholder='Please shape your thoughts here. Please make sure to login first'
                value={text}
                onChange={(e)=>setText(e.target.value)}
                ref={ansRef}
            >
            </textarea>
            <Answers answersArray={question.answers} id={postId}></Answers>
        </Box>
    </>
    : <div>There is a glitch in QuestionPage component</div>
  )
}
export default QuestionPage