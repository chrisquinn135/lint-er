import React from 'react'
import info from '../assets/info-illustration.png'

const Default = () => {
  return (
    <div className="spacing-16">
        <img src={info} style={{width:'40%'}} />
        <h2>TDS Linter</h2>
        <div className="spacing-16 color-text--state-secondary">
            1. conconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </div>
        <div className="spacing-16 color-text--state-secondary">
            2. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </div>
    </div>
  )
}

export default Default