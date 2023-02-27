import React from 'react';
import Footer from './Footer'
import TabBar from './nav/TabBar'
import '../styles/ui.css';
import '../styles/color.css';
import { connect } from 'react-redux';
import Default from './Default';
import { useDispatch } from "react-redux";
import { updateError} from '../redux/slice/errorSlice'
import Error from './error/ErrorSwitcher'
import { loadingEnd} from '../redux/slice/navSlice'


function App(props) {

  const dispatch = useDispatch();

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      dispatch(loadingEnd())
      dispatch(updateError(event.data.pluginMessage))
    };
  }, []);

  return (
    <div>
      <TabBar/>
      {props.did_run ? <Error /> : <Default/>}
      <Footer/>
      {/* <div className="footer">
        <hr className="solid divider"/>
        <div className="spacing-16">
          <Button onClick={onClick}/>
        </div>
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { did_run: state.error.did_run }
}

export default connect(mapStateToProps)(App);
