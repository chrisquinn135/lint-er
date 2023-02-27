import React from 'react'
import Link from '../components/Link'
import { useDispatch, connect } from 'react-redux'
import {ignoreError, focus} from '../../redux/slice/errorSlice'

const ErrorBox = (props) => {

  const dispatch = useDispatch();
  const onClick = () => {
      dispatch(ignoreError(props.id))
  }

  const focusError = () => {
    dispatch(focus(props.id))
    parent.postMessage({ pluginMessage: { type: 'focus', id: props.id } }, '*');
  }

  return (
    <div className={props.id == props.is_focus ? 'spacing-16 border-round--focus flexbox-stretch' : 'spacing-16 border-round flexbox-stretch'} onClick={focusError}>
        <div className='flexbox--right'>
            <div className='text-md-semibold'>
                {props.name}
            </div>
            <Link title={"Ignore"} onClick={onClick}/>
        </div>
        <div className="color-text--state-secondary text-sm-reg">
            {props.desc}
        </div>
    </div>
  ) 
}

const mapStateToProps = (state) => {
    return { is_focus: state.error.focus }
}

export default connect(mapStateToProps)(ErrorBox)