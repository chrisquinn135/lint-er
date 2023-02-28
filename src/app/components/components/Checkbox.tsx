import React, { useEffect,useState } from 'react'
import '../../styles/components.css'
import {connect} from 'react-redux'
import {sf,rb,lf} from '../../redux/slice/fontSlice'
import {useDispatch} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

const Checkbox = (props) => {

    const [isCheck, setCheck] = useState(false);

    const dispatch = useDispatch();

    const onClick = () => {
        if(props.type == 'Libre Franklin') {
            dispatch(lf())
        } else if (props.type == 'SF Pro') {
            dispatch(sf())
        } else {
            dispatch(rb())
        }
    }

    useEffect(() => {
        if(props.type == 'Libre Franklin') {
            setCheck(props.lf)
        } else if (props.type == 'SF Pro') {
            setCheck(props.sf)
        } else {
            setCheck(props.rb)
        }
      }, [props.sf, props.rb, props.lf]);

    return (

            <span onClick={onClick} className={isCheck ? "checkmark-active" : "checkmark"}
                >
                {isCheck ? <FontAwesomeIcon icon={faCheck}/> : ""}
                </span>

)
}


const mapStateToProps = (state) => {
    return {sf: state.font.sf, lf: state.font.lf, rb: state.font.rb}
}

export default connect(mapStateToProps)(Checkbox)
