import React from 'react'
import { connect } from 'react-redux'
import ErrorContainer from './ErrorContainer'
import NoError from './NoError'

const ErrorSwitcher = (props) => {
    return (
        <div>
            {props.errorList.length == 0
                ? <NoError />
                : <ErrorContainer />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return { errorList: state.error.errorList }
}

export default connect(mapStateToProps)(ErrorSwitcher);