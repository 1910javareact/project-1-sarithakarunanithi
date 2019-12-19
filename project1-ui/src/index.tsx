import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// App - is our app name
// root - comes from public-index.html
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
