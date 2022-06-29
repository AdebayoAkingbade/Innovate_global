import React from "react";
import './Timeline.css'
import Oval from "../../assets/Oval_2.png";
import dot from "../../assets/Oval.png";
import fun from '../../assets/funnel_shape.png'

const Timeline = () => {
  return (
    <div>
      <div className='img_container'>
        <img src={Oval} alt="blue_oval" />
        <img src={dot} alt="green_dot" />
        <img src={fun} alt="funnel" className='funnel' />
      </div>
    </div>
  );
};

export default Timeline;
