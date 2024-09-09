import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { TiBell } from "react-icons/ti"
import avatar from '../assets/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumperavatar.png'
import { GrMenu } from 'react-icons/gr';

const Navbar = () => {
    return (
        <div className='navbar-div'>
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex align-items-around justify-content-between">
                        <button className="navbar-toggler d-md-none d-sm-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasNavbar">
                            <GrMenu />
                        </button>
                        <div className="d-flex justify-content-end ms-3 my-3 col-sm-5 col-md-4 col-lg-3 col-7 rounded search-bar-container">
                            <span className="border-0 p-1 bg-transparent"><BiSearch /></span>
                            <input type="text" placeholder='Search or type' className="form-control border-0 bg-transparent" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>

                        <div className='d-flex justify-content-end align-items-center my-auto col-sm-5 col-md-6 col-lg-7 col-3 h-75'>
                            <div className='h-75 my-auto mb-1 notification-bell-div'>
                                <TiBell className='h-75 bell-icon'/>
                                <span className='bg-danger'></span>
                            </div>
                            <div className='rounded-circle'>
                                <img src={avatar} alt="profile picture" className='rounded-circle' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar