import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo-content">
        <div className="logo">
          <span>logo here</span>
          <div className="logo-name">Artbit Apps</div>
        </div>
        <span>menu icon here</span>
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
    </div>
  )
}

export default Sidebar