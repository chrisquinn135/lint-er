import React , {useState} from 'react';
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

  const onClick = () =>{
    setDidRun(true)
  }

  const [didRun, setDidRun] = useState(false)

  return (
    <div>
      <TabBar/>
      {didRun ? <Error /> : <Default/>}
      <Footer test={onClick}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { did_run: state.error.did_run }
}

export default connect(mapStateToProps)(App);
