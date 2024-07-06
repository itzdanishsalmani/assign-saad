import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/pages/HomePage";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import Admin from "./component/pages/Admin";
import UserPage from "./component/pages/UserPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user" element={<UserPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App