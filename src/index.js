import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Footer from "./Footer";
import Events from "./Event";

ReactDOM.render(<Header />, document.querySelector('.Header'));
ReactDOM.render(<Events />, document.querySelector('#events'));
// ReactDOM.render(<Header />, document.querySelector('.Grid'));
ReactDOM.render(<Footer />, document.querySelector('.Footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
