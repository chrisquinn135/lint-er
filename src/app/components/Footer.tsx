import React from 'react';
import Button from './components/Button';
import Setting from './components/Setting';
import '../styles/ui.css';
import '../styles/color.css';
import {useDispatch, connect} from "react-redux";
import {currentState, updateError,ignore} from '../redux/slice/errorSlice'
import {loadingStart, loadingEnd, setting} from '../redux/slice/navSlice'

const Footer = (props) => {
    
    const dispatch = useDispatch();

    const onRun = () => {
        const count = 5;
        parent.postMessage({
            pluginMessage: {
                type: 'run',
                count
            }
        }, '*');
    };

    const onClick = () => {
        onRun();
        dispatch(loadingStart());
        dispatch(currentState());
    }

    const ignoreClick = () => {
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

    return (<div className="footer">
        <hr className="solid divider"/>
        {props.setting && <Setting />}
        {props.setting && <hr className='setting' style={{marginLeft: '16px', marginRight: '16px'}} />}
        <div className="spacing-16 footer-contents">
            <Button onClick={ignoreClick} title={'Reset Ignore'} type={'tertiary'}/>
            <Button onClick={settingClick} title={'Settings'} type={'tertiary'}/>
            <Button onClick={onClick} title={'Run'} type={'primary'}/>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return { setting: state.nav.setting }
  }

export default connect(mapStateToProps)(Footer);
