import React, { useState } from 'react'
import { GiElectric } from "react-icons/gi"
import CircularBar from './CircularBar'

const ProgressChart = ({ data }) => {

  const [hovering, setHovering] = useState(false);
  let { icon, word, color } = data;

  return (
    <div
      className='p-2 py-4 col-lg-3 col-md-6 col-12 progress-chart-div'
    >
      <div className='d-flex flex-column w-100 align-items-center rounded circular-bar'
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      >
        <div className='p-1 d-flex justify-content-center align-items-center my-4 progress-chart-icon-div' style={{ backgroundColor: color }}><img src={icon} alt='icon' /></div>
        <p className='fw-bold'>{word}</p>
        <div className='px-5 py-2 mb-2'>
          <CircularBar data={data} hovering={hovering}/>
        </div>
      </div>
    </div>

  )
}

export default ProgressChart