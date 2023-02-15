import React from 'react'
import info from '../assets/info-illustration.png'

const Default = () => {
  return (
    <div className="spacing-horizontal-16 body flexbox">
        <img src={info} style={{width:'40%'}} />
        <div className="color-text--state-primary text-xl-semibold">TDS Linter</div>
        <ol >
          <li className="color-text--state-secondary">
            What is a linter? It is used to calculate the amount of errors u have in ur design file! 
          </li>
          <li className="color-text--state-secondary">
            Correct the errors and they disappear yay!
          </li>
        </ol>
        
    </div>
  )
}

export default Default