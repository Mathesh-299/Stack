import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Component/Navbar';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Project from './Pages/Projects';
import './assets/css/style.css';
export const App = () => {
  return (
    
   <>
    
    <BrowserRouter>
    <Routes>
     
      <Route path={'/'} element={<Profile/>}></Route>
      <Route path={'/project'} element={<Project/>}></Route>
      <Route path={'/contact'} element={<Contact/>}></Route>
      <Route path={'/login'} element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    

   </>

  )
}

export default App;
