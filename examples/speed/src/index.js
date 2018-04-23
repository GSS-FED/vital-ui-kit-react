import React from 'react';
import ReactDOM from 'react-dom';
import '@gssfed/vital-ui-kit-react/dist/global.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
