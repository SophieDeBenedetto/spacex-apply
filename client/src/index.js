import React                 from 'react';
import ReactDOM              from 'react-dom';
import App                   from './components/App';
import configureStore        from './store/configureStore';
import { Provider }          from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './assets/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootswatch/dist/cyborg/bootstrap.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();



