import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = ({ data, hovering }) => {
  const onHoverProgressbarColorAndText = '#FFFFFF'
  const onHoverTrailColor = 'rgba(255, 255, 255, 0.1)'

  let { percentage, progressColor } = data;
  let changeStyleOnHover = (e) => {
    console.log(e.target.styles)
  }
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      circleRatio={0.7}
      styles={buildStyles({
        textColor: hovering ? onHoverProgressbarColorAndText : `#242731`,
        rotation: 0.65,
        trailColor: hovering ? onHoverTrailColor : '#F4F5F9',
        pathColor: hovering ? onHoverProgressbarColorAndText : progressColor
      })}
    />
  )
}

export default CircularBar