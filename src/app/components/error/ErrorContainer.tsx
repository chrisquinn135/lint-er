import React from 'react'
import { connect } from 'react-redux'
import ErrorBox from './ErrorBox'

const ErrorContainer = (props) => {
  return (
    <div className='spacing-16 flexbox-stretch'>
      {props.errorList.map((error) =>
        !error.status ?
          <ErrorBox title={error.title} message={error.message} id={error.id} />
          : ""
      )}

    </div>
  )
}


const mapStateToProps = (state) => {
  return { errorList: state.error.errorList }
}

export default connect(mapStateToProps)(ErrorContainer);
