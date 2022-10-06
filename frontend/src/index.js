import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profilepage from './pages/myProfile/profilepage';
import Dashboard from './pages/dashboard/dashboard';
import Loginpage from './pages/admin/login/loginpage';
import Registerpage from './pages/admin/register/registerpage';
import MyProjects from './pages/myProjects/myProjects';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';

function Router(){
  return(
  <BrowserRouter>
        <Routes>
          <Route path = "/"> 
            <Route index element = {<App/>}/>
            <Route path = "homepage" element = {<App/>}/>
            <Route path = "profile" element = {<Profilepage/>}/>
            <Route path = "projects" element = {<MyProjects/>}/>
          </Route>
          <Route path = "/admin/"> 
            <Route path = "login" element = {<Loginpage/>}/>
            <Route path = "register" element = {<Registerpage/>}/>
            <Route path = "dashboard" element = {<Dashboard/>}/>
          </Route>
        </Routes>
    </BrowserRouter>  
)
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);