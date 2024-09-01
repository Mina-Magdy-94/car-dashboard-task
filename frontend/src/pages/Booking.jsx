import React, { useEffect, useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { RxMixerHorizontal } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux';
import { MoonLoader } from 'react-spinners';
import Card from '../components/Card';
import ListCard from '../components/ListCard';
import { getAllCars } from '../store/reducer/carSlice'


const Booking = () => {
  const dispatch = useDispatch()
  const { cars, isLoading, networkErr } = useSelector(state => state.carList)
  const [carsToRender, setCarsTorender] = useState([])
  let [layout, setLayout] = useState(`grid`)



  let changeToGrid = (e) => {
    if (layout === `list`) {
      setLayout(`grid`)
    }
  }

  let changeToList = (e) => {
    if (layout === `grid`) {
      setLayout(`list`)
    }
  }


  useEffect(() => {
    if (!cars.length) {
      dispatch(getAllCars())
    }
    setCarsTorender(cars)
  }, [cars])


  const filterCars = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'all') {
      setCarsTorender(cars)
    } else {
      setCarsTorender(cars.filter((singleCar) => singleCar.model.toLowerCase() === e.target.value))
    }
  }


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
              <select name="cars" id="cars" className='rounded-pill border border-0 py-1 px-2 w-100' onClick={filterCars}>
                <option value="all" onClick={filterCars}>All</option>
                {[...new Set (cars.map((el)=>el.model))].map((car,index)=><option key={index} value={car.toLowerCase()} >{car}</option>)}
              </select>
            </div>
          </div>

          <div className="right d-flex justify-content-end col-9 gap-1 ">
            <div className={`d-flex align-items-center justify-content-center ${layout === `grid` ? `icon-to-hover-active` : `icon-to-hover-inactive`} dashboard-icon-div`} onClick={(e) => changeToGrid(e)}>
              <RxDashboard className='dashboard-icon' />
            </div>
            <div className={`d-flex align-items-center justify-content-center ${layout === `list` ? `icon-to-hover-active` : `icon-to-hover-inactive`}`} onClick={(e) => changeToList(e)}>
              <RxMixerHorizontal className='listing-icon' />
            </div>
          </div>
        </div>
      </div>

      {networkErr && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: `60vh`, backgroundColor: `#FFFFFF` }}>
          <h1 className='mb-0 capitalize text-warning col-12 text-center'>No Cars To Show, Please try again</h1>
        </div>
      )}

      {isLoading &&
        (<div className="d-flex justify-content-center align-items-center" style={{ height: `60vh`, backgroundColor: `#FFFFFF` }}>
          <MoonLoader color="rgba(161, 98, 247, 1)" size={210} speedMultiplier={1} />
        </div>)
      }
      <div className='d-flex flex-wrap'>
        {layout === `grid` ? carsToRender.map((element) => {
          return <Card theCar={element} key={element.id} />
        }) : carsToRender.map((element) => {
          return <ListCard theCar={element} key={element.id} />
        })}
      </div>

    </div>
  )
}

export default Booking