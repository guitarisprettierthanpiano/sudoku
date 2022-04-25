import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './app/store';

require('./styles.css');
import App from './App';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
