import React from 'react'
import Sidebar from '../widgets/sidebar/sidebar';
import Navbar from '../widgets/navbar/navbar';
import './homepage.scss'

function Homepage() {
  return (
    <div className='mainhome'>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="navbar">
        <Navbar/>
      </div>
    </div>
  )
}
export default Homepage