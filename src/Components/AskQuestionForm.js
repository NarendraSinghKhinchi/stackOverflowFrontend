import React,{useState} from 'react'
import { Box, Button, Alert, IconButton , Collapse } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector,useDispatch } from 'react-redux';
import { postQuestion } from './Slices/postsSlice';

function AskQuestionForm({modalToggler}) {
  const [title,setTitle] = useState("");
  const [description,setDescription]=useState("");
  const [tags,setTags] = useState("");
  const [open, setOpen] = useState(false);
  const [alertMsg , setAlertMsg] = useState("");
  
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.user.status);
  const userId = useSelector(state => state.user.id);
  
  const handleTitleChange = (e)=>setTitle(e.target.value);
  const handleDescriptionChange = (e)=>setDescription(e.target.value);
  const handleTagsChange = (e)=>setTags(e.target.value);
  
  const handleQuestionPost = async ()=>{
    if(userStatus === 'logged out'){
        setAlertMsg("please log in first");
        setOpen(true);
        return ;
    }
    if(title.length === 0 || description.length === 0){
        setAlertMsg("please provide required fields");
        setOpen(true);
        return ;
    }
    const data = {
        title:title,
        description:description,
        author:userId,
        tags:tags.split(","),
        answers:[],
        votes:0,
        views:0
    }
    
    dispatch(postQuestion(data));
    modalToggler();
  }
  return (
    <Box
        sx={{
            position:"absolute",
            left:'0',
            right:"0",
            top:"180px",
            width:{md:"600px",xs:"280px",sm:"450px"},
            border:"1px solid rgb(0,0,0,0.3)",
            height:"500px",
            marginLeft:"auto",
            marginRight:"auto",
            backgroundColor:"whitesmoke",
            borderRadius:"8px",
            fontSize:"22px",
            paddingTop:"10px",
            "&  textarea":{
                width:"100%",
                resize:"none",
                border:"none",
                outline:"none",
                backgroundColor:"rgb(0,0,0,0.1)",
                fontSize:"18px",
                marginBottom:"22px",
                boxSizing:"border-box"
            },
            "& *":{
                paddingLeft:"10px",
            }
        }}
    >   
        <label style={{position:'relative'}}>
            <div onClick={modalToggler} style={{position:'absolute', right:'5px', cursor:"pointer"}}>
                <CloseIcon ></CloseIcon>
            </div>
            Title
            <textarea placeholder='Give A Suitable Title' onChange={handleTitleChange} value={title}  style={{height:"100px"}}></textarea>
        </label>
        
        <label>
            Description
            <textarea placeholder='Give details of your problem' onChange={handleDescriptionChange} value={description} style={{height:"100px"}} ></textarea>
        </label>
        <label>
            Tags
            <textarea spellCheck="false" placeholder='Tag your question. Separate different tags by "," please do not insert space.'  onChange={handleTagsChange} value={tags} style={{height:"50px"}} ></textarea>
        </label>
        <div style={{
                width:"100%",
                textAlign:'center',
                position:'relative',
            }}
        >
            <Collapse sx={{position:'absolute',zIndex:"6"}} in={open}>
                <Alert
                    severity='warning'
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {alertMsg}
                </Alert>
            </Collapse>
            <Button onClick={handleQuestionPost} className='btn' variant='contained'>Post</Button>
        </div>
    </Box>
  )
}

export default AskQuestionForm