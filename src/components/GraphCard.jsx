import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import XYGraph from './XYGraph';

const GraphCard = ({ children, id, flipped, statisticsType}) => {
  const [activeGraph, setActiveGraph] = useState("day");

  const activeStyle = (graphType) => `btn ${activeGraph === graphType ? 'btn-primary' : ''} rounded-pill`;

  const dayWeekMonthEl = (
    <div className='d-flex justify-content-center align-items-center'>
      <p
        className={activeStyle("day")}
        onClick={() => setActiveGraph("day")}>
        Day
      </p>
      <p
        className={activeStyle("week")}
        onClick={() => setActiveGraph("week")}>
        Week
      </p>
      <p
        className={activeStyle("month")}
        onClick={() => setActiveGraph("month")}>
        Month
      </p>
    </div>
  );

  const milesEl = (<div className='d-flex align-self-center'>
    <p className='text-center align-self-center'>256 Miles</p>
  </div>);

  const elemsToShow = !flipped ? [dayWeekMonthEl, milesEl] : [milesEl, dayWeekMonthEl];

  return (
    <div className='p-3 col-12 col-md-6'>
      <div className="d-flex flex-column align-items-center" style={{ height: '50vh' }}>
        <div className='align-self-start'>
          <h4><span className='fw-bold me-1'>{statisticsType}</span>Statistics</h4>
        </div>

        <div className='w-100'>
          <div className="d-flex justify-content-between align-items-center">
            {elemsToShow}
          </div>
        </div>

        <div className='w-100 h-100'>
          {children(id, activeGraph)}
        </div>
      </div>
    </div>
  )
}

export default GraphCard