import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const ListCard = ({ props }) => {
    let { model, type, numberOfClients, dependency, rentPrice, imgSrc } = props
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
    return (
        <div className='container col-12 p-2'>
            <div className="d-flex justify-content-between rounded p-3 ms-0" style={{ backgroundColor: `#FFFFFF` }}>
                <div className="d-flex justify-content-start gap-4 flex-wrap" style={{width: "95%"}}>
                    <div className="d-flex p-2 bg-danger col-12 col-sm-10 col-md-5 col-lg-4 justify-content-center align-items-center" style={{maxWidth:`295px`}} >
                        <img src={imgSrc} alt="" style={{maxHeight: "100%", width: "100%"}} />
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
                    <span  onClick={toggleSpan} onMouseEnter={(e)=>hoverOnWhiteHeart(e)} onMouseLeave={mouseLeaveHandler} >{heartColor.color===`white`?<BsHeart/>:<BsHeartFill style={{color:`#F84F56`}}/>}</span>
                </div>
            </div>
        </div>
    )
}

export default ListCard