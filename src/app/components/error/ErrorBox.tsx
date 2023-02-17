import React from 'react'
import Link from '../components/Link'
import { useDispatch } from 'react-redux'
import {ignoreError} from '../../redux/slice/errorSlice'

const ErrorBox = ({title,message,id}) => {

  const dispatch = useDispatch();
  const onClick = () => {
      dispatch(ignoreError(id))
  }

  return (
    <div className='spacing-16 border-round flexbox-stretch'>
        <div className='flexbox--right'>
            <div className='text-md-semibold'>
                {title}
            </div>
            <Link title={"Ignore"} onClick={onClick}/>
        </div>
        <div className="color-text--state-secondary text-sm-reg">
            {message}
        </div>
    </div>
  )
}

export default ErrorBox