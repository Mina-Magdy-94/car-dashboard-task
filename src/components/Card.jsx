import React, { useEffect, useRef, useState, useCallback } from 'react'
import repeat from "../assets/iconrepeat.png"
import {AiOutlineUser} from 'react-icons/ai'
import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'

const Card = ({props}) => {
  let {model,type,numberOfClients,dependency,rentPrice,imgSrc}=props
  let [heartColor,setHeartColor]=useState({
    color:`white`,
    action:null
  })

  let toggleSpan=()=>{
    heartColor.color===`red` && heartColor.action ==='hover'?setHeartColor({color:`red`,action:'clicked'}):setHeartColor({color:`white`,action:'clicked'})
    }

  let hoverOnWhiteHeart=(e)=>{
    if(heartColor.color===`white`){
      setHeartColor({color:`red`,action:'hover'})
    }
  }
  

  let mouseLeaveHandler=(e)=>{
    if(heartColor.action==='hover' && heartColor.color==='red'){
      setHeartColor({color:`white`,action:`leave`})
    }
  }

  // const ref = useRef(null);
  // const [height, setHeight] = useState(0);

  // const onResize = useCallback(() => {
  //   console.log("width:", ref.current.clientWidth, ", height:", ref.current.clientHeight, height)
  //   if (ref.current) setHeight(ref.current.clientWidth);
  // }, []);
  
  // useEffect(() => {
  //   console.log("hhhhh1")
  //   window.addEventListener("resize", onResize);
  //   onResize();
  //   return () => {
  //     console.log("hhhhh2")
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, [ref?.current?.clientWidth]);

  return (
    <div className="container col-12 col-sm-6 col-lg-4 p-2">
      <div className='d-flex flex-column p-3 justify-content-center align-items-center rounded card-parent-div'>
        <div className="d-flex justify-content-between w-100">
          <h5>{model}</h5>
          <span  onClick={toggleSpan} onMouseEnter={(e)=>hoverOnWhiteHeart(e)} onMouseLeave={mouseLeaveHandler} >{heartColor.color===`white`?<BsHeart/>:<BsHeartFill className='red-heart'/>}</span>
        </div>

        <div className="d-flex w-100">
          <p className='text-muted'>{type}</p>
        </div>

        <div className="d-flex card-div-img">
          <img src={imgSrc} alt="" className='mx-auto' />
        </div>

        <div className="d-flex justify-content-between w-100 mt-2">
          <div className='d-flex justify-content-start gap-3 bg-success col-9'>
            <div>
              <span><AiOutlineUser className='user-icon'/></span>
              <span className='ms-1 mb-0 text-end'>{numberOfClients}</span>
            </div>
            <div className='d-flex gap-1'>
            <span><img src={repeat} alt="" /></span>
            <span>{dependency}</span>
            </div>
          </div>

          <div className='d-flex  justify-content-center align-items-center bg-warning col-3'>
            <p className='fw-bold text-center mb-0 bg-info'>{rentPrice}<span className='text-muted'>/d</span></p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Card