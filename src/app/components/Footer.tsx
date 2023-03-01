import React, { useRef,useEffect } from 'react'
import Button from './components/Button';
import Setting from './components/Setting';
import '../styles/ui.css';
import '../styles/color.css';
import {useDispatch, connect} from "react-redux";
import {currentState, updateError,ignore} from '../redux/slice/errorSlice'
import {loadingStart, loadingEnd, setting} from '../redux/slice/navSlice'

const Footer = (props) => {

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (props.setting && ref.current && !ref.current.contains(e.target)) {
            dispatch(setting())
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [props.setting])

    const dispatch = useDispatch();

    const onRun = () => {
        parent.postMessage({
            pluginMessage: {
                type: 'run'
            }
        }, '*');
    };

    const onClick = () => {
        dispatch(currentState());
        if(props.setting) {
            dispatch(setting())
        }
        dispatch(loadingStart());
        setTimeout(() => {
            // Execute the callback function after the timeout
            onRun();
        }, 109);
    }

    const ignoreClick = () => {
        dispatch(setting())
        dispatch(ignore())
    }

    const settingClick = () => {
        dispatch(setting())
    }

    React.useEffect(() => { // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            dispatch(loadingEnd())
            dispatch(updateError(event.data.pluginMessage))
        };
    }, []);

    return (<div className="footer" ref={ref}>
        <Setting isVisible={props.setting}/>
        {/* {props.setting && <Setting isVisible={props.setting}/>} */}
        <div className="spacing-16 footer-contents">
            <Button onClick={ignoreClick} title={'Reset Ignore'} type={'tertiary'}/>
            <Button onClick={settingClick} title={'Settings'} type={props.setting ? 'tertiary-on' : 'tertiary'}/>
            <Button onClick={onClick} title={'Run'} type={'primary'}/>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return { setting: state.nav.setting }
  }

export default connect(mapStateToProps)(Footer);
