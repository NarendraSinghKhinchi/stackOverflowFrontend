import React,{useState,useRef} from 'react'
import { Typography} from '@mui/material';
import { Link , Navigate } from 'react-router-dom';
import './styles.css' ;
import {signUp} from '../api/api'
function Signup() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState(""); 
    const [isSignedUp, setIsSignedUp] = useState(false);
    
    const msgRef = useRef();
    const cotRef = useRef();
    const emailChange = (e)=>{setEmail(e.target.value)};
    const passwordChange = (e)=>{setPassword(e.target.value)};
    const nameChange = (e) =>{setName(e.target.value)};
    
    const handleTransform = ()=>{
        // cotRef.current.style.width = "100%" ;
        cotRef.current.style.height = "380px" ;
    }
    const handleSubmit = async ()=>{
        const data = {
            name:name,
            password:password,
            email:email
        }
        setEmail("");
        setName("");
        setPassword("");
        const response = await signUp(data);
        msgRef.current.innerText = response.data.message
        msgRef.current.style.display= 'block' ;
        setTimeout(() => {
            // Perform some actions after the timeout expires
            msgRef.current.style.display= 'none' ;
            if(response.status === 200){
                setIsSignedUp(true)
            }
        }, 2000);
    }
    if (isSignedUp) {
        return <Navigate to="/user/login" />;
    }
    return (
        
        <div className='auth_modal_top'>
            <div className='message_box' ref={msgRef} >msg will apperar will appear here</div>
            <div className='auth_modal_wrapper'
                ref = {cotRef} onClick={handleTransform}
                style={{width:"280px",height:"380px"}}
            >
                <div
                    className='auth_modal'
                >   
                    <div>Name</div>
                    <input placeholder='your name' className='auth_input' onChange={nameChange} value={name}></input>
                    <div>Email</div>
                    <input placeholder='your email' type='email' className='auth_input' onChange={emailChange} value={email}></input>
                    <div>Password</div>
                    <input type='password' placeholder='your password' className='auth_input' onChange={passwordChange} value={password}></input>
                    <button className='auth_btn' onClick={handleSubmit}>Sign up</button>
                    <Typography>already have an account
                        <Link to="/user/login" style={{textDecoration:"none"}}> Log in</Link>
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Signup