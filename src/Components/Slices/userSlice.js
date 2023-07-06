import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:'logged out',
    id:"",
    name :'',
    email:'',
    accessToken:'',
    interests:[]
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        // we update the state in central store so that user can use features 
        // all around the app
        loggedIn(state,action){
            const {id , name , email , accessToken} = action.payload ;
            state.id = id ;
            state.name = name ;
            state.email = email ;
            state.accessToken = accessToken ;
            state.status = "logged in";
        },
        // we update the state to restrict the user from using protected features
        loggedOut(state,action){
            state.id = '' ;
            state.name = '' ;
            state.email = '' ;
            state.accessToken = '' ;
            state.status = "logged out"
        }
    }
})

export const {loggedIn,loggedOut} = userSlice.actions ;
export default userSlice.reducer ;