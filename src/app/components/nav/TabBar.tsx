import React from 'react'
import Tab from '../components/Tab'

const TabBar = () => {
  return (
    <div className='tabbar'>

      {/* currently hard coded */}
      <Tab numberOfError={0} title={"Font"}/> 
      <Tab numberOfError={0} title={"Color"}/> 
    </div>
  )
}

export default TabBar