import React from 'react'
import "./Services.css";
import {SectionTitle} from "../index"
import { arrowIcon, servicesData } from '../../assets';

function Services() {
  return (
    <div id='services' className='services'>

      <SectionTitle title="My services" />

      <div className="services-container">
        {
          servicesData.map((service) => (
            <div className="services-format" key={service.s_no}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrowIcon} alt="right arrow" />
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Services