import axios from 'axios' ;

// keeping it here it will be easy to change after deployment of backend
const url = "https://stackoverflowclone-qt4k.onrender.com/" ;

async function getAllQuestions(){
    const options = {
        method:"get",
        url:url,
    }

    try {
        const response = await axios.request(options);
        return response ;
    } catch (error) {
        console.log("error occured while trying to fetch questions");
        console.log(error);
        throw error;
    }
}
async function postNewQuestion(data){
    const options = {
        method:"post",
        url:url,
        data:data
    }

    try {
        const response = await axios.request(options);
        return response ;
    } catch (error) {
        console.log("error occured while trying to post question");
        console.log(error);
        throw error;
    }
}
async function getAllAnswers(data , id){
    const options = {
        method:"get",
        url:url + id + "/answer",
        params:{
            "arrayData":data.join(',')
        }
    }
    try{
        const response = await axios.request(options);
        return response;
    }catch(error){
        console.log("error occured while trying to fetch answers");
        throw error ;
    }
}
async function postNewAnswer(data , id ){
    const options = {
        method:"post",
        url:url + id + "/answer",
        data:data
    }
    try{
        const response = await axios.request(options);
        return response;
    }catch(error){
        console.log("error occured while trying to post answer");
        throw error ;
    }
}
async function signUp(data){
    const options = {
        method:"post",
        url:url + "user/register",
        data:data
    }
    try {
        const response = await axios.request(options);
        return response ;
    } catch (error) {
        console.error("error occured while trying to register the user");
        console.log(error);
        return error.response ;
    } 
}
async function logIn(data){
    const options = {
        method:"post",
        url:url + "user/login",
        data:data
    }
    try {
        const response = await axios.request(options);
        return response ;
    } catch (error) {
        console.error("error occured while trying to log in the user");
        console.log(error);
        return error.response ;
    }
}

export {postNewQuestion,signUp,logIn ,getAllQuestions,postNewAnswer , getAllAnswers} ;
