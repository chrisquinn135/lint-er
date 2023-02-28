import React from 'react'
import '../../styles/components.css'

const Button = (props) => {
  return (
    <div className={props.type == 'primary'? "button-primary text-md-med" : props.type == 'tertiary' ? "button-tertiary text-md-semibold" : ""} onClick={props.onClick}>
      {props.title}
    </div>
  )
}

export default Button