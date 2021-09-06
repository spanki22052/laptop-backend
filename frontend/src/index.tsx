import React from 'react';
import ReactDOM from 'react-dom';
import MainpageComponent from './Components/MainpageComponent';
import reportWebVitals from './reportWebVitals';
import NavbarComponent from './Components/NavbarComponent';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <NavbarComponent></NavbarComponent>
    <MainpageComponent></MainpageComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();