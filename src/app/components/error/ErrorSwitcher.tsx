import React from 'react'
import {connect} from 'react-redux'
import ErrorContainer from './ErrorContainer'
import NoError from './NoError'
import Loading from './Loading'

const ErrorSwitcher = (props) => {
    return (<div> {
        props.loading ? <Loading /> : (props.color > 0 && props.current == 'Color') || (props.font > 0 && props.current == 'Font') ? <ErrorContainer tab={
            props.current
        }/> : <NoError tab={
            props.current
        }/>
    } </div>)
}

const mapStateToProps = (state) => {
    return {current: state.nav.current_tab, color: state.error.color, font: state.error.font, loading: state.nav.loading}
}

export default connect(mapStateToProps)(ErrorSwitcher);
