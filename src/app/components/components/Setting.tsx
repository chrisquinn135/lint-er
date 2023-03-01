import React from 'react'
import Checkbox from './Toggle'

const Setting = ({ isVisible }) => {



  return (
    <div className={`menu ${isVisible ? "visible header spacing-horizontal-16" : "spacing-horizontal-16 header"}`}>
      {/* <div className='text-sm-med' style={{marginBottom:'8px'}}>Font Settings</div> */}
      <div className='spacing-16 setting-font' style={{marginTop:'8px'}}>
        <div className='flexbox--right-center'>
          Libre Franklin
          <Checkbox type='Libre Franklin' />

        </div>
        <hr className="setting" />
        <div className='flexbox--right-center'>
          SF Pro
          <Checkbox type='SF Pro' />

        </div>
        <hr className="setting" />
        <div className='flexbox--right-center'>
          Roboto
          <Checkbox type='Roboto' />
        </div>
        <hr className="setting" />
        <div className='flexbox--right-center'>
          Mixed
          <Checkbox type='Mixed' />
        </div>
      </div>
    </div>
  )
}

export default Setting