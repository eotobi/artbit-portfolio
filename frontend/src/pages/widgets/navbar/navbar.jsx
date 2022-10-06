import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-links">
          <Link className="nav-home" to="/homepage">
            Homepage
          </Link>
          <Link className="nav-projects" to="/profile">
            Profile
          </Link>
          <Link className="nav-projects" to="/projects">
            Projects
          </Link>
          <div className="nav-articles">Articles</div>
          <div className="nav-tutorials">Tutorials</div>
        </div>
    </div>
  )
}
export default Navbar