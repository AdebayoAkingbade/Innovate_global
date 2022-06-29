import React from "react";
import Oval from "../../assets/Oval.png";
import "./Rate.css";
import long_yellow from "../../assets/long_yellow.png";
import long_purple from "../../assets/long_purple.png";
import long_blue from "../../assets/long_blue.png";
import long_grey from "../../assets/long_grey.png";

const Rate = () => {
  return (
    <div className="rate_container">
      <div className="err">
        <img src={Oval} alt="Green_dot" className="dot" />
        <div className="letters">
          <span>Errors: 0,12%</span>
          <p>Average: 0,11%</p>
        </div>
      </div>
      <div className="zero">
        <img src={Oval} alt="Green_dot" className="dot" />
        <div className="letters">
          <span>Zeroes: 5,12%</span>
          <p>Average: 0,11%</p>
        </div>
      </div>
      <div className="timeout">
        <img src={Oval} alt="Green_dot" className="dot" />
        <div className="letters">
          <span>Timeouts: 0,12%</span>
          <p>Average: 0,11%</p>
        </div>
      </div>
      <div className='stripes'>
        <img src={long_yellow} alt="" />
        <img src={long_purple} alt="" />
        <img src={long_blue} alt="" />
        <img src={long_grey} alt="" />
      </div>
    </div>
  );
};

export default Rate;
