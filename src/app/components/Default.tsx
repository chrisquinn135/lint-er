import React from 'react'
import info from '../assets/info-illustration.png'

const Default = () => {
  return (
    <div className="spacing-horizontal-16 body flexbox">
        <img src={info} style={{width:'40%'}} />
        <div className="color-text--state-primary text-xl-semibold">TDS Linter</div>
        <div className="color-text--state-secondary " style={{textAlign:'center', padding:'8px'}}>
          Once you press "Run Lint", the linter will analyze your files using predefined rules from the Trulioo design system and display any design issues on the screen!     

        </div>
        
    </div>
  )
}

export default Default