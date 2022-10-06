import React from 'react'
import NavbarSimple from '../widgets/navbar/navbarsimple'
import Navbar from '../widgets/navbar/navbar'
import GitHubIcon from '@mui/icons-material/GitHub'
import "./myProjects.scss"

const MyProjects = () => {
  return (
    <div className='main-container'>
      <div className='projects-navbar'>
        <NavbarSimple />
      </div>
      <div className='projects-links'>
        <Navbar />
      </div>
      <div className="projects-container">
        <div className="project">
          <div className="project-details">
            <div className="title">Booking Reservation System</div>
            <div className="description">
              Server started: Hot Module Replacement enabled, 
              Live Reloading enabled, Progress disabled, Overlay enabled.
              react-dom.development.js:29795 Download the React DevTools for a better 
              development experience: https://reactjs.org/link/react-devtools
              react-dom.development.js:45 Warning: ReactDOM.render is no longer supported
              in React 18. Use createRoot instead. Until you switch to the new API, your app 
              will behave as if it's running React 17. 
              Learn more: https://reactjs.org/link/switch-to-createroot
            </div>
            <div className="view-code">
              <GitHubIcon className="git-icon"/>
              View Code on Github
            </div>
          </div>
          <div className="project-image">
            <img src={process.env.PUBLIC_URL + '/sampleproject.png'} alt=""/>
            <img src={process.env.PUBLIC_URL + '/sampleproject2.png'} alt=""/>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <div className="title">Booking Reservation System</div>
            <div className="description">
              Server started: Hot Module Replacement enabled, 
              Live Reloading enabled, Progress disabled, Overlay enabled.
              react-dom.development.js:29795 Download the React DevTools for a better 
              development experience: https://reactjs.org/link/react-devtools
              react-dom.development.js:45 Warning: ReactDOM.render is no longer supported
              in React 18. Use createRoot instead. Until you switch to the new API, your app 
              will behave as if it's running React 17. 
              Learn more: https://reactjs.org/link/switch-to-createroot
            </div>
            <div className="view-code">
              <GitHubIcon className="git-icon"/>
              View Code on Github
            </div>
          </div>
          <div className="project-image">
            <img src={process.env.PUBLIC_URL + '/sampleproject.png'} alt=""/>
            <img src={process.env.PUBLIC_URL + '/sampleproject2.png'} alt=""/>
          </div>
        </div>

      </div> 
    </div>
  )
}

export default MyProjects
