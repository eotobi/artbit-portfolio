import React from 'react'
import "./sidebar.scss"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo-content">
        <div className="logo">
          <span>logo here</span>
          <div className="logo-name">Artbit Apps</div>
        </div>
        <span>menu button here</span>
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">
            <span>#-#</span>
            <span className="links-name">DASHBOARD</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
        <li>
          <a href="#">
            <span>#-#</span>
            <span className="links-name">DASHBOARD</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
        <li>
          <a href="#">
            <span>#-#</span>
            <span className="links-name">DASHBOARD</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
        <li>
          <a href="#">
            <span>#-#</span>
            <span className="links-name">DASHBOARD</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
        <li>
          <a href="#">
            <span>#-#</span>
            <span className="links-name">DASHBOARD</span>
          </a>
          {/* <span className="toolstip">DASHBOARD</span> */}
        </li>
      </ul>
      <div className="profile-content">
        <div className="profile">
          <div className="profile-details">
          <img src="profile.jpg" alt=""/>
            <div className="name-job">
              <div className="name">Elisha Otobi</div>
              <div className="job">Fullstack Developer</div>
            </div>
          </div>
        </div>
        <span>logout icon here</span>
      </div>
    </div>
  )
}

export default Sidebar