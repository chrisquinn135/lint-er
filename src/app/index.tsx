import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import navReducer  from './redux/slice/navSlice'
import errorReducer from './redux/slice/errorSlice'
import fontReducer from './redux/slice/fontSlice'
import { Provider } from 'react-redux';

import App from './components/App';

const store = configureStore({
  reducer: {
    nav: navReducer,
    error: errorReducer,
    font: fontReducer
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page');
  const root = createRoot(container);
  root.render(<Provider store={store}><App/></Provider>);
});
