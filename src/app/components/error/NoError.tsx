import React from 'react'
import clear from '../../assets/clear-illustration.png'


const NoError = () => {
  return (
    <div className="spacing-horizontal-16 body flexbox">
        <img src={clear} style={{width:'40%'}} />
        <div className="text-xl-semibold color-text--state-primary">No Errors Found!</div>
        <div className="color-text--state-secondary">Great job, the file looks perfect!</div>
        
    </div>
  )
}

export default NoError