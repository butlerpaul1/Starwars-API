import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import React from 'react';

import registerServiceWorker from './registerServiceWorker';

//Routes history={ browserHistory}
ReactDOM.render(
  <Main />,
   document.getElementById('root'));
registerServiceWorker();
