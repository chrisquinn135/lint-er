import React from 'react'
import Tab from './Tab'

const tabbar_style = {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-around',
    borderBottomStyle:'solid',
    borderColor: '#EBEBF0',
    borderWidth: 1,
   

} as React.CSSProperties

const TabBar = () => {
  return (
    <div style={tabbar_style}><Tab numberOfError={15} title={"Font"}/> <Tab numberOfError={5} title={"Color"}/> </div>
  )
}

export default TabBar