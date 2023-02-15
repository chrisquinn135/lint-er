import React from 'react'
import '../../styles/components.css'

const Button = (props) => {
  return (
    <div className="button text-md-med" onClick={props.onClick}>Run</div>
  )
}

export default Button