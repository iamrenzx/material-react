import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css'
render(<App />, document.getElementById('root'));
registerServiceWorker();
