import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import User from '../routes/User';
import '../src/styles/global.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <User />
  </BrowserRouter>,
  document.getElementById('root')
);
