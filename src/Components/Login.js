import React,{useState,useRef} from 'react' ;
import { Typography } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import  './styles.css' ;
import {logIn} from '../api/api'
import { useDispatch } from 'react-redux';
import { loggedIn } from './Slices/userSlice';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const msgRef = useRef();
    const cotRef = useRef();
    const dispatch = useDispatch();

    const emailChange = (e)=>{setEmail(e.target.value)};
    const passwordChange = (e)=>{setPassword(e.target.value)};

    const handleTransform = ()=>{
        cotRef.current.style.width = "100%" ;
        cotRef.current.style.height = "100%" ;
    }
    const handleSubmit = async ()=>{
        const data = {
            email:email,
            password:password
        }
        setEmail("");
        setPassword("");
        // this could can be moved to userSlice and then from here we will have to 
        // only dispatch a action like we do to fetch questions leaving it here for now
        // keeping it here is also fine for small project
        const response = await logIn(data);
        msgRef.current.innerText = response.data.message
        msgRef.current.style.display= 'block' ;
        
        setTimeout(() => {
            // Perform some actions after the timeout expires
            msgRef.current.style.display= 'none' ;
            if(response.status === 200){
                const id = response.data.user.id ;
                const email = response.data.user.email ;
                const name = response.data.user.name ;
                const accessToken = response.data.accessToken ;
                dispatch(loggedIn({id,name,email,accessToken}));
                setIsLoggedIn(true);
            }
        }, 2000);
    }

    if (isLoggedIn) {
        return <Navigate to="/" />;
    }
    return (
        <div className='auth_modal_top'>
            <div className='message_box' ref={msgRef} >msg will apperar will appear here</div>
            <div  className='auth_modal_wrapper' 
                ref = {cotRef} onClick={handleTransform}
                style={{width:"280px",height:"350px"}}
            >
                <div
                    className='auth_modal'
                >   
                    <Typography mb='15px' fontSize={19}>Hey there 👋 welcome back</Typography>
                    <div>Email</div>
                    <input placeholder='your email' type='email' className='auth_input' onChange={emailChange} value={email}></input>
                    <div>Password</div>
                    <input type='password' placeholder='your password' className='auth_input' onChange={passwordChange} value={password}></input>
                    <button className='auth_btn' onClick={handleSubmit}>Log In</button>
                    <Typography>don't have an account
                        <Link to="/user/register" style={{textDecoration:"none"}}> Sign up</Link>
                    </Typography>
                </div>
            </div>
        </div>   
    )
}

export default Login