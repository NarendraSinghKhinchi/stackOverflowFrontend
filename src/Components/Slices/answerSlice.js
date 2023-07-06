import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { postNewAnswer,getAllAnswers } from "../../api/api";


const initialState = {
    answerData:[],
    fetchStatus:'idle',
    postStatus:'idle',
    error: null
}

export const postAnswer = createAsyncThunk('answers/postAnswer', async({data,id})=>{
    const response = await postNewAnswer(data,id);
    return response.data ;
})
export const fetchAnswers = createAsyncThunk('answers/fetchAnswers' , async({data,id})=>{
    //data is the answers array attached to a particular question
    const response = await getAllAnswers(data,id);
    // console.log(response);
    return response.data ;
})
const answerSlice = createSlice({
        name:"answers",
        initialState,
        reducers:{},
        extraReducers(builder) {
        builder
            .addCase(postAnswer.pending, (state, action) => {
                state.postStatus = 'loading'
            })
            .addCase(postAnswer.fulfilled, (state, action) => {
                state.postStatus = 'succeeded'
                // Add any fetched posts to the array
                // console.log(action.payload);
                state.answerData.unshift(action.payload.savedAnswer);
            })
            .addCase(postAnswer.rejected, (state, action) => {
                state.postStatus = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchAnswers.pending, (state, action) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchAnswers.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                // Add any fetched posts to the array
                state.answerData = action.payload;
            })
            .addCase(fetchAnswers.rejected, (state, action) => {
                state.fetchStatus = 'failed'
                state.error = action.error.message
            })
        }
    }
)
// export const {postAdded} = postsSlice.actions
export default answerSlice.reducer ;