import * as React from 'react';
import { render } from 'react-dom';

require('./styles.css')
import App from './App';

render(
    <App />,
    document.querySelector('#root-container')
)

