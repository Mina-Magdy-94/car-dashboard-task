import React, { useEffect, useRef, useState, useCallback } from 'react'
import repeat from "../assets/iconrepeat.png"
import { AiOutlineUser } from 'react-icons/ai'
import { BsHeartFill, BsLayoutSidebar } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars, likeOrUnlikeAcar } from '../store/reducer/carSlice'

const Card = ({ theCar }) => {
  let { model, type, numberOfClients, dependency, rentPrice, imageSrc, id, isLiked } = theCar
  let { cars } = useSelector(state => state.carList)
  let dispatch = useDispatch()
  let [heartColor, setHeartColor] = useState(`white`)

  let toggleSpan = () => {
    dispatch(likeOrUnlikeAcar([id, { ...theCar, isLiked: !isLiked }]))
  }

  let hoverOnWhiteHeart = (e) => {
    if (!isLiked) {
      setHeartColor(`red`)
    }
  }


  let mouseLeaveHandler = (e) => {
    if (!isLiked) {
      setHeartColor(`white`)
    }
  }

  // useEffect(() => {
  //   dispatch(likeOrUnlikeAcar(id, theCar))
  // }, [])

  return (
    <div className="container col-12 col-sm-6 col-lg-4 p-2">
      <div className='d-flex flex-column p-3 justify-content-center align-items-center rounded card-parent-div'>
        <div className="d-flex justify-content-between w-100">
          <h5>{model}</h5>
          <span
            onClick={() => toggleSpan()}
            onMouseEnter={(e) => hoverOnWhiteHeart(e)}
            onMouseLeave={mouseLeaveHandler}
          >
            {isLiked || heartColor === `red` ? <BsHeartFill className='red-heart' /> : <BsHeart />}</span>
        </div>

        <div className="d-flex w-100">
          <p className='text-muted'>{type}</p>
        </div>

        <div className="d-flex card-div-img">
          <img src={imageSrc} alt="" className='mx-auto' />
        </div>

        <div className="d-flex justify-content-between w-100 mt-2">
          <div className='d-flex justify-content-start gap-3 col-9'>
            <div>
              <span><AiOutlineUser className='user-icon' /></span>
              <span className='ms-1 mb-0 text-end'>{numberOfClients}</span>
            </div>
            <div className='d-flex gap-1'>
              <span><img src={repeat} alt="" /></span>
              <span>{dependency}</span>
            </div>
          </div>

          <div className='d-flex  justify-content-center align-items-center col-3'>
            <p className='fw-bold text-center mb-0'>${rentPrice}<span className='text-muted'>/d</span></p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Card