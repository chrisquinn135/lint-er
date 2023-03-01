import React from 'react'
import '../../styles/components.css'

const Button = (props) => {
  return (
    <div className={props.type == 'primary'? "button-primary text-md-med" : props.type == 'tertiary-on' ? "button-tertiary-on text-md-reg" : "button-tertiary text-md-reg"} onClick={props.onClick}>
      {props.title}
    </div>
  )
}

export default Button