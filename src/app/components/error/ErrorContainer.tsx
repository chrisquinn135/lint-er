import React from 'react'
import { connect } from 'react-redux'
import ErrorBox from './ErrorBox'

const ErrorContainer = (props) => {
  return (
    <div className='spacing-16 flexbox-stretch' style={{overflowY:'scroll', height:'75vh',justifyContent:'flex-start'}}>
      {props.errorList.map((error) =>
        !error.status && error.type == props.tab ?
          <ErrorBox type={error.type} name={error.name} id={error.id} />
          : ""
      )}
    </div>
  )
}


const mapStateToProps = (state) => {
  return { errorList: state.error.errorList }
}

export default connect(mapStateToProps)(ErrorContainer);
