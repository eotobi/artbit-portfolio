import React from 'react'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import DehazeIcon from '@mui/icons-material/Dehaze'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ConstructionIcon from '@mui/icons-material/Construction'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import DataObjectIcon from '@mui/icons-material/DataObject'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import "./sidebar.scss"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo-content">
        <div className="logo">
          <ArchitectureIcon className="icon"/>
          <div className="logo-name">Artbit Apps</div>
        </div>
        <DehazeIcon className="menu-button" id="btn" />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">
          <AccountCircleIcon className="icons"/>
            <span className="links-name">Profile Details</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
        <li>
          <a href="#">
          <ConstructionIcon className="icons"/>
            <span className="links-name">Personal Projects</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
        <li>
          <a href="#">
          <AutoStoriesIcon className="icons"/>
            <span className="links-name">Articles</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
        <li>
          <a href="#">
          <DataObjectIcon className="icons"/>
            <span className="links-name">Tutorials</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
        <li>
          <a href="#">
          <DashboardIcon className="icons"/>
            <span className="links-name">Dashboard</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
      </ul>
      <div className="profile-content">
        <div className="profile">
          <div className="profile-details">
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt=""/>
            <div className="name-job">
              <div className="name">Elisha Otobi</div>
              <div className="job">Fullstack Developer</div>
            </div>
          </div>
          <ExitToAppIcon className="icon-exit"/>
        </div>
      </div>
    </div>
  )
}
export default Sidebar