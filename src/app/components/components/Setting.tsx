import React from 'react'
import Checkbox from './Checkbox'

const Setting = () => {
    
  return (
    <div className='spacing-16 header'>
        <div className='text-sm-med' style={{marginBottom:'8px'}}>Overall Settings</div>
        <div className='spacing-16 setting-font'>
        <div className='flexbox--right'>
                Libre Franklin
                <Checkbox type='Libre Franklin'/>

            </div>
            <hr className="setting"/>
            <div className='flexbox--right'>
                SF Pro
                <Checkbox type='SF Pro'/>

            </div>
            <hr className="setting"/>
            <div className='flexbox--right'>
                Roboto
                <Checkbox type='Roboto'/>
            </div>
        </div>
    </div>
  )
}

export default Setting