import React,{useState,useEffect} from 'react'
import {Box, Button} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Post from './Post'
import AskQuestionForm from './AskQuestionForm'
import { useSelector,useDispatch } from 'react-redux'
import { fetchQuestions } from './Slices/postsSlice';

function TrendingQuestions() {
  const [modalVisible, setModalVisibility] = useState(false);

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.postData);
  const fetchStatus = useSelector(state => state.posts.fetchStatus);
  
  
    useEffect(() => {
        const fetchData = ()=>{
            if (fetchStatus === 'idle') {
                dispatch(fetchQuestions());
            }
        }
        fetchData();
    }, [fetchStatus, dispatch])
    
    const modalToggler  = ()=>{
        if(modalVisible){
            setModalVisibility(false);
        }else{
            setModalVisibility(true);
        }
    }
  
  return (
    <Box
        sx={{
            margin:"100px auto",
            width:{md:"800px",sm:"600px",xs:"90vw"},
            padding:"15px",
            borderRadius:"5px",
        }}
    >   
        {
            fetchStatus !== 'loading' ? 
            (   <>
                <Button onClick={modalToggler} className='btn'  sx={{width:{sm:"200px", xs:"140px"}}} variant='contained'>Ask a Question</Button>
                
                {   
                    modalVisible ? (<AskQuestionForm modalToggler={modalToggler}></AskQuestionForm>)
                    : (<></>)
                }
                
                
                <Box
                    mt='25px'
                    sx={{
                        height:"800px",
                        overflowY:"auto",
                    }}
                >
                {
                    posts.map(post =>(
                        <Post key={post._id} data={post} ></Post>
                    ))
                }
                </Box>
                </>
            )
            :
            (
                <CircularProgress color="secondary" />
            )
        }
    </Box>
  )
}

export default TrendingQuestions