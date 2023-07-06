import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { postNewQuestion,getAllQuestions } from "../../api/api";

const initialState = {
    postData:[],
    fetchStatus:'idle',
    postStatus:'idle',
    error: null
}
export const postQuestion = createAsyncThunk('posts/postQuestion', async(data)=>{
    const response = await postNewQuestion(data);
    return response.data ;
})

export const fetchQuestions = createAsyncThunk('posts/fetchQuestions' , async()=>{
    
    const response = await getAllQuestions();
    // console.log(response);
    return response.data ;
})
const postsSlice = createSlice({
        name:"posts",
        initialState,
        reducers:{  },
        extraReducers(builder) {
        builder
            .addCase(postQuestion.pending, (state, action) => {
            state.postStatus = 'loading'
            })
            .addCase(postQuestion.fulfilled, (state, action) => {
            state.postStatus = 'succeeded'
            // Add any fetched posts to the array
            state.postData.unshift(action.payload);
            })
            .addCase(postQuestion.rejected, (state, action) => {
            state.postStatus = 'failed'
            state.error = action.error.message
            })
            .addCase(fetchQuestions.pending, (state, action) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                // Add any fetched posts to the array
                state.postData = action.payload.allQuestions;
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                state.fetchStatus = 'failed'
                state.error = action.error.message
            })
        }
    }
)
// export const {postAdded} = postsSlice.actions
export default postsSlice.reducer ;