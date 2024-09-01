import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  return (

    <div className="row g-0">
      <div className="col-0 col-md-2 left-side-home">
        <Sidebar />
      </div>
      <div className="col-12 col-md-10 right-side-home">
        <Navbar />
        <Outlet />
      </div>
    </div>

  )
}

export default Dashboard