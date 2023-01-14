import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { likeOrUnlikeAcar } from '../store/reducer/carSlice'

const ListCard = ({ theCar }) => {
    let {id, model, type, numberOfClients, dependency, rentPrice, imageSrc,isLiked } = theCar
    const dispatch=useDispatch()
    let [heartColor,setHeartColor]=useState(`white`)
    
      let toggleSpan=()=>{
        console.log({id},{theCar})
        dispatch(likeOrUnlikeAcar([id,{...theCar,isLiked:!isLiked}]))
        }
    
      let hoverOnWhiteHeart=(e)=>{
        if(!isLiked){
          console.log(isLiked)
          setHeartColor(`red`)
        }
      }
      
    
      let mouseLeaveHandler=(e)=>{
        if(!isLiked){
          setHeartColor(`white`)
        }
      }
    return (
        <div className='container col-12 p-2'>
            <div className="d-flex justify-content-between rounded p-3 ms-0 list-card-div">
                <div className="d-flex justify-content-start gap-4 flex-wrap left-list-card-div">
                    <div className="d-flex p-2 col-12 col-sm-10 col-md-5 col-lg-4 justify-content-center align-items-center list-card-image-div" >
                        <img src={imageSrc} alt="car" />
                    </div>
                    <div className="d-flex flex-column p-2 col-12 col-sm-10 col-md-5 col-lg-4 ">
                        <p><span className='fw-bold'>Model : </span>{model}</p>
                        <p><span className='fw-bold'>Type : </span>{type}</p>
                        <p><span className='fw-bold'>Transmission : </span>{dependency}</p>
                        <p><span className='fw-bold'>Number of Clients : </span>{numberOfClients}</p>
                        <p><span className='fw-bold'>Price : </span>{rentPrice}</p>
                    </div>
                </div>
                <div>
                    <span  onClick={toggleSpan} onMouseEnter={(e)=>hoverOnWhiteHeart(e)} onMouseLeave={mouseLeaveHandler} >{isLiked || heartColor===`red`?<BsHeartFill className='red-heart'/>:<BsHeart/>}</span>
                </div>
            </div>
        </div>
    )
}

export default ListCard