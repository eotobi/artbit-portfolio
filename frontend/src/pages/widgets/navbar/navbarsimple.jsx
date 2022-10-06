import React from 'react'
import "./navbarsimple.scss"
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import ElectricBoltIcon  from '@mui/icons-material/ElectricBolt'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'

const NavbarSimple = () => {
  return (
    <div className="navbar">
        <span className='title'>Artbit apps portfolio</span>
        <div className="search">
            <SearchIcon className="icon"/>
            <input type='text' placeholder='Search...'/>
          </div>
          <div className="nav-links">
            <DarkModeIcon className="icons"/>
            <ElectricBoltIcon className="icons"/>
            <QueryStatsIcon className="icons"/>            
            <div className="nav-admin">
              <AdminPanelSettingsIcon className="admin-icon"/>
              <span className="admin-name">Admin</span>
            </div>
          </div>
    </div>
  )
}
export default NavbarSimple