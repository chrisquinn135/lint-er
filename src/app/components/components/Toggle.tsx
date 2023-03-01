import React, { useEffect, useState } from 'react'
import '../../styles/components.css'
import { connect } from 'react-redux'
import { sf, rb, lf,mixed } from '../../redux/slice/fontSlice'
import { useDispatch } from 'react-redux'

const Checkbox = (props) => {

    const [isCheck, setCheck] = useState(false);

    const dispatch = useDispatch();

    const onClick = () => {
        if (props.type == 'Libre Franklin') {
            dispatch(lf())
        } else if (props.type == 'SF Pro') {
            dispatch(sf())
        } else if (props.type == 'Roboto') {
            dispatch(rb())
        } else {
            dispatch(mixed())
        }
    }

    useEffect(() => {
        if (props.type == 'Libre Franklin') {
            setCheck(props.lf)
        } else if (props.type == 'SF Pro') {
            setCheck(props.sf)
        } else if (props.type == 'Roboto') {
            setCheck(props.rb)
        } else {
            setCheck(props.mixed)
        }
    }, [props.sf, props.rb, props.lf, props.mixed]);

    return (
        <div>
            {/* <span onClick={onClick} className={isCheck ? "checkmark-active" : "checkmark"}
            >
                {isCheck ? <FontAwesomeIcon icon={faCheck} /> : ""}
            </span> */}
            <div className={`toggle ${isCheck ? "active" : ""}`} onClick={onClick}>
                 <div className="toggle-handle"></div>
             </div>
        </div>

    )
}


const mapStateToProps = (state) => {
    return { sf: state.font.sf, lf: state.font.lf, rb: state.font.rb, mixed: state.font.mixed }
}

export default connect(mapStateToProps)(Checkbox)
