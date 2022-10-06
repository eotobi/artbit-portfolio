import React, {useState} from 'react'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import DehazeIcon from '@mui/icons-material/Dehaze'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ConstructionIcon from '@mui/icons-material/Construction'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import DataObjectIcon from '@mui/icons-material/DataObject'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import HomeIcon from '@mui/icons-material/Home';
import "./fixedsidebar.scss"
import { Link } from 'react-router-dom';

function FixedSidebar() {
 
  return (
    <div className="sidebar-active">
      <div className="logo-content">
            <img className="image-logo" src={process.env.PUBLIC_URL + '/mylogo.svg'} alt=""/>
      </div>
      <ul className="nav-list">
      <li>
          <Link to="/homepage">
          <HomeIcon className="icons"/>
            <span className="links-name">Homepage</span>
          </Link>
        </li>
        <li>
          <Link to="/profile">
          <AccountCircleIcon className="icons"/>
            <span className="links-name">Profile Details</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
          <ConstructionIcon className="icons"/>
            <span className="links-name">Personal Projects</span>
          </Link>
        </li>
        <li>
          <a href="#">
          <AutoStoriesIcon className="icons"/>
            <span className="links-name">Articles</span>
          </a>
        </li>
        <li>
          <a href="#">
          <DataObjectIcon className="icons"/>
            <span className="links-name">Tutorials</span>
          </a>
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
export default FixedSidebar