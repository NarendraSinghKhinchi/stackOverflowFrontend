import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionPage from './Components/QuestionPage'
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/question/:postId" element={<QuestionPage></QuestionPage>}></Route>
        <Route path="/user/login" element={<Login></Login>}></Route>
        <Route path="/user/register" element={<Signup></Signup>}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
