import React from 'react'
import "./MyWorks.css"
import {SectionTitle } from "./../index";
import { arrowIcon, myworkData } from '../../assets';

function MyWorks() {
  return (
    <div id='work' className='mywork'>
      <SectionTitle title="My latest work" />

      <div className="mywork-container">
        {
          myworkData.map((work) => (
            <div className="work-format" key={work.w_no}>
              <img src={work.w_img} alt="work image" />
            </div>
          ))
        }
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="right arrow" />
      </div>

    </div>
  )
}

export default MyWorks