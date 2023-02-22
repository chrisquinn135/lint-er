import React from 'react'
import clear from '../../assets/clear-illustration.png'


const Loading = (props) => {
  return (
    <div className="spacing-horizontal-16 body flexbox">
        <img src={clear} style={{width:'40%'}} />
        <div className="text-xl-semibold color-text--state-primary">Loading</div>
        <div className="color-text--state-secondary">Hang on tight, we're triple checking!</div>
    </div>
  )
}

export default Loading