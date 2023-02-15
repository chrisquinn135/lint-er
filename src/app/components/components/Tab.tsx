import React from 'react'
import Tag from './Tag'
import {tabSwitch} from '../../redux/slice/navSlice'
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import '../../styles/components.css'


const Tab = (props) => {

  // used to switch tabs
  const dispatch = useDispatch();
  const onClickTab = () => {
    dispatch(tabSwitch(props.title));
  }

  return (
    <div className={props.current === props.title ? "text-md-med tabbar-tab tabbar-tab--state-active" : "text-md-med tabbar-tab"} onClick={onClickTab}>
      {props.title} 
      <Tag numberOfError={props.numberOfError}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { current: state.nav.current_tab }
}

export default connect(mapStateToProps)(Tab)