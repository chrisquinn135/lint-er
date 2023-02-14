import React from 'react';
import Button from './components/Button';
import TabBar from './nav/TabBar'
import '../styles/ui.css';
import '../styles/color.css';
import { connect } from 'react-redux';
import Default from './Default';

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
      <Default />
      <div style={{position:"fixed", bottom:'0px', width:'100%'}}><Button /></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { current: state.nav.tab }
}

export default connect(mapStateToProps)(App);
