import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import {RxMixerHorizontal} from 'react-icons/rx'
import Card from '../components/Card';
import ListCard from '../components/ListCard';

const Booking = () => {
  let [layout,setLayout]=useState(`grid`)


  let changeToGrid=(e)=>{
    if(layout===`list`){
      setLayout(`grid`)
    }
  }

  let changeToList=(e)=>{
    if(layout===`grid`){
      setLayout(`list`)
    }
  }

  let cars = [
    { id: 1, model: "Porshe 718 Cayman S", type: "Coupe", numberOfClients: 4, dependency: "Manual", rentPrice: "$400", imgSrc: "/cars/car1.png" },
    { id: 2, model: "Porshe 718 Cayman S", type: "Coupe", numberOfClients: 4, dependency: "Manual", rentPrice: "$400", imgSrc: "/cars/car2.png" },
    { id: 3, model: "Porshe 718 Cayman S", type: "Coupe", numberOfClients: 4, dependency: "Manual", rentPrice: "$400", imgSrc: "/cars/car3.png" },
    { id: 4, model: "Porshe 718 Cayman S", type: "Coupe", numberOfClients: 4, dependency: "Manual", rentPrice: "$400", imgSrc: "/cars/car4.png" },
    { id: 5, model: "Porshe 718 Cayman S", type: "Coupe", numberOfClients: 4, dependency: "Manual", rentPrice: "$400", imgSrc: "/cars/car5.png" },
    { id: 6, model: "Porshe 718 Cayman S", type: "Coupe", numberOfClients: 4, dependency: "Manual", rentPrice: "$400", imgSrc: "/cars/car6.png" },
    { id: 7, model: "Porshe 718 Cayman S", type: "Coupe", numberOfClients: 4, dependency: "Manual", rentPrice: "$400", imgSrc: "/cars/car7.png" },
    { id: 8, model: "Porshe 718 Cayman S", type: "Coupe", numberOfClients: 4, dependency: "Manual", rentPrice: "$400", imgSrc: "/cars/car8.png" },
    { id: 9, model: "Porshe 718 Cayman S", type: "Coupe", numberOfClients: 4, dependency: "Manual", rentPrice: "$400", imgSrc: "/cars/car9.png" }
  ]

  return (
    <div className='container p-4'>
      <h3>Booking</h3>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-between gap-2 col-12 my-3">
          <div className="left d-flex justify-content-start gap-2 w-25">
            <div className='d-flex align-items-center justify-content-center'>
              <select name="dateOfUpdate" id="dateOfUpdate" className='rounded-pill border border-0 py-1 px-2'>
                <option value="new" >New</option>
              </select>
            </div>

            <div className='d-flex align-items-center justify-content-center'>
              <select name="cars" id="cars" className='rounded-pill border border-0 py-1 px-2'>
                <option value="toyota" >Toyota</option>
              </select>
            </div>
          </div>

          <div className="right d-flex justify-content-end col-9 gap-1 ">
            <div className={`d-flex align-items-center justify-content-center ${layout===`grid`?`icon-to-hover-active`:`icon-to-hover-inactive`} dashboard-icon-div`} onClick={(e)=>changeToGrid(e)}>
              <RxDashboard className='dashboard-icon'/>
            </div>
            <div className={`d-flex align-items-center justify-content-center ${layout===`list`?`icon-to-hover-active`:`icon-to-hover-inactive`}`}onClick={(e)=>changeToList(e)}>
              <RxMixerHorizontal className='listing-icon' />
            </div>
          </div>
        </div>

        
      </div>



      <div className='d-flex flex-wrap'>
        {layout===`grid`? cars.map((element, index) => {
          return <Card props={element} key={index}/>
        }):cars.map((element,index)=>{
          return <ListCard props={element} key={index}/>
        })}
      </div>

    </div>
  )
}

export default Booking