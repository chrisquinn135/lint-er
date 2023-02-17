import React from 'react'
import '../../styles/components.css'
 

const Link = ({title, onClick}) => {
  return (
    <div className='link text-sm-reg' onClick={onClick}>{title}</div>
  )
}

export default Link