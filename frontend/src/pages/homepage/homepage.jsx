import React from 'react'
import Sidebar from '../widgets/sidebar/sidebar';
import Navbar from '../widgets/navbar/navbar';

function Homepage() {
  return (
    <div className='mainhome'>
      <Sidebar/>
      <Navbar/>
    </div>
  )
}
export default Homepage