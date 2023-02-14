import React from 'react';
import Button from './components/button'
import TabBar from './nav/TabBar'
import '../styles/ui.css';
import { connect } from 'react-redux';

function App(props) {
  const textbox = React.useRef<HTMLInputElement>(undefined);

  const countRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = '5';
    textbox.current = element;
  }, []);

  const onCreate = () => {
    const count = parseInt(textbox.current.value, 10);
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

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
      <h2>TDS LINTER</h2>
      {props.current}
      <p>
        Count: <input ref={countRef} />
      </p>
      <button id="create" onClick={onCreate}>
        Create
      </button>
      <button onClick={onCancel}>Cancel</button>
      <div style={{position:"fixed", bottom:'0px'}}><Button /></div>
      <Button />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { current: state.nav.tab }
}

export default connect(mapStateToProps)(App);
