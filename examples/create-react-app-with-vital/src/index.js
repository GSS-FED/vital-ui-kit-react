import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@gssfed/vital-ui-kit-react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import '@gssfed/vital-ui-kit-react/dist/base/global.css';
import './index.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
