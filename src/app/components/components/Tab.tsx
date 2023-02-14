import React from 'react'
import Tag from './Tag'
import {tabSwitch} from '../../redux/slice/navSlice'
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import '../../styles/components.css'


// const tab_default_style = {
//     padding: 16,
//     display: 'flex',
//     flexDirection: 'row' as 'row',
//     justifyContent: 'center',
//     gridGap: 8,
//     color: "#6C6C70"
// } as React.CSSProperties

// const tab_is_active_style = {
//     padding: 16,
//     display: 'flex',
//     flexDirection: 'row' as 'row',
//     justifyContent: 'center',
//     gridGap: 8,
//     borderBottomStyle:'solid',
//     borderColor: '#004759',
//     borderWidth: 2, 
    
// } as React.CSSProperties

const Tab = (props) => {

  const dispatch = useDispatch();

  const onClickTab = () => {
    console.log("TAB GOT CLICKED")
    dispatch(tabSwitch(props.title));
  }

  return (
    <div className={props.current === props.title ? "text-md-med tab tab--state-active" : "text-md-med tab"} onClick={onClickTab}>
      {props.title} 
      <Tag numberOfError={props.numberOfError}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { current: state.nav.current_tab }
}

export default connect(mapStateToProps)(Tab)