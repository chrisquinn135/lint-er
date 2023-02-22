import React from 'react';
import Button from './components/Button';
import TabBar from './nav/TabBar'
import '../styles/ui.css';
import '../styles/color.css';
import { connect } from 'react-redux';
import Default from './Default';
import { useDispatch } from "react-redux";
import {currentState, updateError} from '../redux/slice/errorSlice'
import Error from './error/ErrorSwitcher'
import {loadingStart, loadingEnd} from '../redux/slice/navSlice'

const Footer = () => {
    const dispatch = useDispatch();

  const onRun = () => {
    const count = 5;
    parent.postMessage({ pluginMessage: { type: 'run', count } }, '*');
  };

  const onClick = () => {
    onRun();
    dispatch(loadingStart());
    dispatch(currentState());
  }
  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      console.log("HIT")
      dispatch(loadingEnd())
      dispatch(updateError(event.data.pluginMessage))
    };
  }, []);

  return (
    <div className="footer">
        <hr className="solid divider"/>
        <div className="spacing-16">
          <Button onClick={onClick}/>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => {
  return { did_run: state.error.did_run }
}

export default connect(mapStateToProps)(Footer);