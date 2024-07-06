import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from "./component/pages/HomePage"
import { Login } from "./component/pages/Login"
import { Register } from "./component/pages/Register"
import { AdminPage } from './component/AdminPage'
import { UserPage } from './component/UserPage'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/admin" element={ <AdminPage/> } />
          <Route path='/user' element={ <UserPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App