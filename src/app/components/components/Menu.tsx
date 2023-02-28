import React from 'react'
import '../../styles/components.css'
import Checkbox from './Checkbox'

const Menu = () => {
  return (
    <div className='flexbox-stretch dropdown-menu'>
        <Checkbox type='Libre Franklin'/>
        <Checkbox type='SF Pro'/>
        <Checkbox type='Roboto'/>
    </div>
  )
}

export default Menu