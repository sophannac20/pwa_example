import React from 'react';
import './index.css';
import App from './App';

import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Register the service worker
serviceWorker.register();