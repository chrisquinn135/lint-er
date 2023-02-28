import React from 'react'
import { connect } from 'react-redux'
import ErrorBox from './ErrorBox'

const ErrorContainer = (props) => {
  return (
    <div className='spacing-16 flexbox-stretch' style={{overflowY:'scroll', height:'75vh',justifyContent:'flex-start'}}>
      {props.tab == 'Font' ? 
      props.fontList.map((error) =>
        !error.status &&
          <ErrorBox type={error.type} name={error.name} id={error.id} desc={error.desc} />
      ) : props.colorList.map((error) =>
      !error.status &&
        <ErrorBox type={error.type} name={error.name} id={error.id} desc={error.desc} />
      )}
    </div>
  )
}


const mapStateToProps = (state) => {
  return { errorList: state.error.errorList, colorList: state.error.colorList, fontList: state.error.fontList }
}

export default connect(mapStateToProps)(ErrorContainer);
