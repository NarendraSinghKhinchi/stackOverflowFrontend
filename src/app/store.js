import {configureStore} from '@reduxjs/toolkit' ;

import postsReducer from '../Components/Slices/postsSlice' ;
import userReducer from '../Components/Slices/userSlice' ;
import answerReducer from "../Components/Slices/answerSlice" ;
export default configureStore({
    reducer :{
        posts : postsReducer,
        user : userReducer,
        answers : answerReducer
    }
})