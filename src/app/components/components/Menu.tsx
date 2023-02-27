import React from 'react'
import '../../styles/components.css'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div className='flexbox-stretch dropdown-menu'>
        <MenuItem type='Libre Franklin'/>
        <MenuItem type='SF Pro'/>
        <MenuItem type='Roboto'/>
    </div>
  )
}

export default Menu