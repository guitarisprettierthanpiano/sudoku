import React from 'react';
import { render } from 'react-dom';

require('./styles.css')
import App from './App';

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)