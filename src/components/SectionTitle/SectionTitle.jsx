import React from 'react'
import "./SectionTitle.css";
import { themePattern } from '../../assets';

function SectionTitle({title}) {
  return (
    <div className="section-title">
      <h1>{title}</h1>
      <img src={themePattern} alt="theme pattern" />
    </div>
  )
}

export default SectionTitle