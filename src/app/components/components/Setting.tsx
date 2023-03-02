import React from 'react'
import Checkbox from './Toggle'

const Setting = ({ isVisible }) => {



  return (
    <div className={`menu ${isVisible ? "visible header spacing-horizontal-16" : "spacing-horizontal-16 header"}`}>
      {/* <div className='text-sm-med' style={{marginBottom:'8px'}}>Font Settings</div> */}
      <div className='spacing-16 setting-font' style={{marginTop:'8px'}}>
        <div className='flexbox--right-center'>
        Allow Libre Franklin
          <Checkbox type='Libre Franklin' />

        </div>
        <hr className="setting" />
        <div className='flexbox--right-center'>
        Allow SF Pro
          <Checkbox type='SF Pro' />

        </div>
        <hr className="setting" />
        <div className='flexbox--right-center'>
          Allow Roboto
          <Checkbox type='Roboto' />
        </div>
        <hr className="setting" />
        <div className='flexbox--right-center'>
        Allow Mixed Font Styles
          <Checkbox type='Mixed' />
        </div>
        <hr className="setting" />
        <div className='flexbox--right-center'>
        Allow Hidden Layers
          <Checkbox type='Hidden' />
        </div>
      </div>
    </div>
  )
}

export default Setting