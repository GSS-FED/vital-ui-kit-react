import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@gssfed/vital-ui-kit-react';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import '@gssfed/vital-ui-kit-react/dist/base/global.css'
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
