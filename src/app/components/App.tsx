import React from 'react';
import Button from './components/Button';
import TabBar from './nav/TabBar'
import '../styles/ui.css';
import '../styles/color.css';
import { connect } from 'react-redux';
import Default from './Default';
import { useDispatch } from "react-redux";
import {currentState} from '../redux/slice/errorSlice'
import Error from './error/ErrorSwitcher'


function App(props) {
  const textbox = React.useRef<HTMLInputElement>(undefined);
  const countRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = '5';
    textbox.current = element;
  }, []);

  const onCreate = () => {
    const count = 5;
    parent.postMessage({ pluginMessage: { type: 'run', count } }, '*');
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };
  const dispatch = useDispatch();

  const onClick = () => {
    onCreate();
    dispatch(currentState());
  }
  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div>
      <TabBar/>
      {props.did_run ? <Error /> : <Default/>}
      <div className="footer">
        <hr className="solid divider"/>
        <div className="spacing-16">
          <Button onClick={onClick}/>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { did_run: state.error.did_run }
}

export default connect(mapStateToProps)(App);
