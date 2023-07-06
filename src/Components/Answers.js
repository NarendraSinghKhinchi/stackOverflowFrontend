import React, { useEffect } from 'react';
import { Box,CircularProgress } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux' ;
import { fetchAnswers } from './Slices/answerSlice';
function Answers({answersArray,id}) {
  
  

  const dispatch = useDispatch();
  const answerStatus = useSelector(state=>state.answers.fetchStatus);
  const answers = useSelector(state=>state.answers.answerData);
  useEffect(()=>{
    if(answerStatus === 'idle'){
      dispatch(fetchAnswers({data:answersArray,id}));
    }
  },[answersArray,id]);
  
  if(answersArray.length == 0){
    return (
      <Box
        border="1px solid rgb(0,0,0,0.2)"
        mb='10px'
        p='10px'
        borderRadius='10px'
        marginTop='10px'
      >
        no answers yet! you can be the first to answer. answer now.
      </Box>
    )
  }
  
  return (
    answerStatus === "succeeded"  ?
    (
      <>
        {
          answers.map(answer=>(
            <Box
              key={answer._id}
              border="1px solid rgb(0,0,0,0.2)"
              mb='10px'
              p='10px'
              borderRadius='10px'
              marginTop='10px'
            >
              {answer.content}
            </Box>
          ))
        }
      </>
    ):
    <CircularProgress></CircularProgress>
  )
}

export default Answers