import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineCar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import { RiScissors2Line } from "react-icons/ri";
import { BsCalendar4Range } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

import { FiSettings } from "react-icons/fi";
import { SlLogout } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import logo from '../assets/Vector 1logo.png'



const Sidebar = () => {

    let upperIcons = [<RxDashboard />, <HiOutlineUserCircle />, <AiOutlineCar />, <HiOutlineShoppingBag />, <BsCart2 />, <RiScissors2Line />, <BsCalendar4Range />, <BiMessageDetail />]
    let upperparagraphes = [`dashboard`, `assets`, `booking`, `sell Cars`, `buy Cars`, `services`, `calender`, `messages`]
    let upperElements = upperIcons.map((icon, index, arr) => {
        let initialObj = {}
        return arr.reduce((acc, ele, theIndex) => {
            acc.icon = icon
            acc.paragraph = upperparagraphes[index]
            return acc
        }, initialObj)
    })


    let lowerIcons = [<FiSettings />, <SlLogout />]
    let lowerParagraphes = [`Settings`, `Log out`]
    let lowerElements = lowerIcons.map((icon, index, arr) => {
        let initialObj = {}
        return arr.reduce((acc, ele, theIndex) => {
            acc.icon = icon
            acc.paragraph = lowerParagraphes[index]
            return acc
        }, initialObj)
    })

    return (
        <div class="offcanvas-md offcanvas-start" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
            <div className="d-flex flex-column">
                <div className="align-items-end d-none d-md-flex gap-1 offcanvas-title pt-2 ps-2" id="offcanvasResponsiveLabel">
                    <div style={{ backgroundColor: `#A162F7` }} className='p-1 pt-0 rounded'>
                        <img src={logo} alt="logo" />
                    </div>
                    <span className='fw-bold fs-4 text-end mb-0'>Motiv.</span>
                </div>

                <div class="offcanvas-header">
                    <div className="d-flex align-items-end gap-1 offcanvas-title pt-2 ps-2" id="offcanvasResponsiveLabel">
                        <div style={{ backgroundColor: `#A162F7` }} className='p-1 pt-0 rounded'>
                            <img src={logo} alt="logo" />
                        </div>
                        <span className='fw-bold fs-4 text-end mb-0'>Motiv.</span>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <div className='p-2 d-flex flex-column justify-content-between' style={{ height: "93vh" }}>
                        <div className="row mt-2">
                            <ul>
                                {upperElements.map((element, index) => {
                                    let itemName = element.paragraph
                                    return (
                                        <li key={index}>
                                            <NavLink to={itemName} className='ps-2 text-decoration-none text-capitalize text-dark d-flex gap-2 w-100 p-2 mt-2 rounded' >
                                                <span>
                                                    {element.icon}
                                                </span>

                                                <span>
                                                    {element.paragraph}
                                                </span>
                                            </NavLink>

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className='d-flex flex-column justify-content-between'>
                            <div className="row">
                                <ul>
                                    {lowerElements.map((element, index) => {
                                        let itemName = element.paragraph
                                        return (
                                            <li key={index}>
                                                <NavLink to={itemName} className='text-decoration-none text-capitalize text-dark d-flex gap-2 w-100 p-2 rounded' >
                                                    <span>
                                                        {element.icon}
                                                    </span>

                                                    <span>
                                                        {element.paragraph}
                                                    </span>
                                                </NavLink>

                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar