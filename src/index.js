import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import UserProvider from './provider/UserProvider';
import { BrowserRouter, } from 'react-router-dom';


ReactDOM.render(

  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,

   document.getElementById('root')
 );
