import React from 'react'
import './TimeTab.css'
import {tabs} from '../../utils/Data'
console.log()
const TimeTab = () => {
  return (
    <div className='time_tab'>
       {tabs.map((val, index):any=>{
          return <div className='last_hr' key={index}>{val}</div>
       })}
    </div>
  )
}

export default TimeTab