import React from 'react'
import recycle from '../assets/Vectorrecycle.png'
import repeat from "../assets/iconrepeat.png"
import { FiSettings } from "react-icons/fi";
import { GiElectric } from "react-icons/gi"




const RecommendedCars = ({props}) => {
    let {percentage,carName,imgSrc,kilos,price,cardColor}=props
  return (
    <div className='container col-12 col-sm-6 col-lg-4 my-4'>
        <div className="d-flex flex-column p-3 gap-1 rounded recommended-car-div" style={{backgroundColor:cardColor}}>
            <div className="d-flex justify-content-start gap-2">
                <img src={recycle} alt="recycle" />
                <p className='my-auto fw-bold'><span>{percentage}</span>Recommended</p>
            </div>

            <div className="d-flex  justify-content-start align-items-center ms-1 recommended-car-image-div">
                <img src={imgSrc} alt={carName} />
            </div>

            <div className="d-flex justify-content-start">
                <h5>{carName}</h5>
            </div>

            <div className="d-flex flex-wrap justify-content-between mb-3" >
                <div className='d-flex justify-content-start gap-2'>
                    <div>
                        <img src={repeat} alt="" />
                    </div>

                    <div>
                        <p>{kilos}k</p>
                    </div>

                    <div>
                        <FiSettings/>
                    </div>

                    <div>
                        <GiElectric/>
                    </div>
                </div>

                <div>
                    <p className='text-muted'>{price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecommendedCars