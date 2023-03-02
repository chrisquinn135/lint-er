import React, { useEffect, useState } from 'react'
import '../../styles/components.css'
import { connect } from 'react-redux'
import { sf, rb, lf,mixed,hidden } from '../../redux/slice/fontSlice'
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
        } else if (props.type == 'Mixed') {
            dispatch(mixed())
        } else {
            dispatch(hidden())
        }
    }

    useEffect(() => {
        if (props.type == 'Libre Franklin') {
            setCheck(props.lf)
        } else if (props.type == 'SF Pro') {
            setCheck(props.sf)
        } else if (props.type == 'Roboto') {
            setCheck(props.rb)
        } else if (props.type == 'Mixed') {
            setCheck(props.mixed)
        } else if (props.type == 'Hidden') {
            setCheck(props.hidden)
        }
    }, [props.sf, props.rb, props.lf, props.mixed, props.hidden]);

    return (
        <div>
            <div className={`toggle ${isCheck ? "active" : ""}`} onClick={onClick}>
                 <div className="toggle-handle"></div>
             </div>
        </div>

    )
}


const mapStateToProps = (state) => {
    return { sf: state.font.sf, lf: state.font.lf, rb: state.font.rb, mixed: state.font.mixed, hidden: state.font.hidden }
}

export default connect(mapStateToProps)(Checkbox)
