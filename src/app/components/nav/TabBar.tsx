import React from 'react'
import Tab from '../components/Tab'
import { connect } from 'react-redux'

const TabBar = (props) => {
  return (
    <div className='tabbar'>

      {/* currently hard coded */}
      <Tab numberOfError={props.color} title={"Color"}/> 
      <Tab numberOfError={"N/A"} title={"Font"}/> 
      
    </div>
  )
}

// get counters
const mapStateToProps = (state) => {
  return { color: state.error.color, font: state.error.font }
}

export default connect(mapStateToProps)(TabBar)