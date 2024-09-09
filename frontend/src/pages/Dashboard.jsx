import React from 'react'
import GraphCard from '../components/GraphCard'
import ProgressChart from '../components/ProgressChart'
import RecommendedCars from '../components/RecommendedCars';
import XYGraph from '../components/XYGraph';
import XYSmoothGraph from '../components/XYSmoothGraph';

import electricity from '../assets/electricity.png'
import arrows from '../assets/arrows.png'
import smallDrop from '../assets/dropSmall.png'
import wheel from '../assets/wheel.png'

const Dashboard = () => {
  const dayData = [
    {
      category: "1 PM",
      value1: 1000,
      // value2: 588
    },
    {
      category: "2 PM",
      value1: 1200,
      // value2: 1800
    },
    {
      category: "3 PM",
      value1: 850,
      // value2: 1230
    },
    {
      category: "4 PM",
      value1: 350,
      // value2: 1230
    },
    {
      category: "5 PM",
      value1: 350,
      // value2: 1230
    },
  ];

  const weekData = [
    {
      category: "01",
      value1: 1500,
      // value2: 588
    },
    {
      category: "02",
      value1: 2000,
      // value2: 1800
    },
    {
      category: "03",
      value1: 1000,
      // value2: 1230
    },
    {
      category: "04",
      value1: 400,
      // value2: 1230
    },
    {
      category: "05",
      value1: 600,
      // value2: 1230
    },
    {
      category: "06",
      value1: 700,
      // value2: 1230
    },
  ];

  const monthData = [
    {
      category: "Jan",
      value1: 1500,
      // value2: 588
    },
    {
      category: "Feb",
      value1: 2000,
      // value2: 1800
    },
    {
      category: "Mar",
      value1: 1050,
      // value2: 1230
    },
    {
      category: "Apr",
      value1: 450,
      // value2: 1230
    },
    {
      category: "May",
      value1: 600,
      // value2: 1230
    },
    {
      category: "Jun",
      value1: 600,
      // value2: 1230
    },
    {
      category: "July",
      value1: 900,
      // value2: 1230
    },
  ];

  let arr = [
  {
    icon:electricity,
    word:`Energy`,
    percentage:45,
    color:`green`
  },
  {
    icon:arrows,
    word:`Range`,
    percentage:80,
    color:`rgba(255, 126, 134, 0.2)`,
    progressColor:`#FF7E86`
  },
  {
    icon:smallDrop,
    word:`Break Fluid`,
    percentage:9,
    color:`rgba(161, 98, 247, 0.2)`,
    progressColor:`#A162F7`
  },
  {
    icon:wheel,
    word:`Tire Wear`,
    percentage:25,
    color:`rgba(246, 204, 13, 0.2)`,
    progressColor:`#F6CC0D`
  },
  ]

  const getDataFor = (activeGraph) => {
    if (activeGraph === 'day') {
      return dayData;
    } else if (activeGraph === 'week') {
      return weekData;
    } else {
      return monthData;
    }
  }

  //Recommended cars array
  let recommendedCar=[
    {
      percentage:`64%`,
      carName:`Mini Cooper`,
      imgSrc:'/cars/rcar1.png',
      kilos:132,
      price:`$32/h`,
      cardColor:`#E1DFA4`
    },
    {
      percentage:`74%`,
      carName:`Porsche 911 Carrera`,
      imgSrc:"/cars/rcar2.png",
      kilos:130,
      price:`$28/h`,
      cardColor:`#E3ECF1`
    },
    {
      percentage:`74%`,
      carName:`Porsche 911 Carrera`,
      imgSrc:'/cars/rcar3.png',
      kilos:130,
      price:`$28/h`,
      cardColor:`#F4E3E5`
    },
  ]

  
  return (
    <div className='container'>
      <div className="d-flex justify-content-center bg-dark flex-wrap" >
        {arr.map((el, index) => { return (<ProgressChart key={index} data={el}/>) })}
      </div>

      <div className="d-flex justify-content-between flex-wrap">
        <GraphCard id='1' flipped={false} statisticsType="Miles">
          {(id, activeGraph) => <XYGraph id={id} data={getDataFor(activeGraph)} activeGraph={activeGraph}/>}
        </GraphCard>
        <GraphCard id='2' flipped={true} statisticsType="Car">
          {(id, activeGraph) => <XYSmoothGraph id={id} data={getDataFor(activeGraph)} activeGraph={activeGraph}/>}
        </GraphCard>
        
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-center my-2">
        {recommendedCar.map((car,index)=>{
        return <RecommendedCars key={index} props={car}/>
        })}
      </div>
    </div>
  )
}

export default Dashboard