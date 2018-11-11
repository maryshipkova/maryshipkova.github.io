import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import * as serviceWorker from './serviceWorker';
import {App as AppDesktop} from "./components/App@desktop";
import {App as AppMobile} from "./components/App@mobile";
import DeviceDetector from 'device-detector-js';


const ua = new DeviceDetector().parse(navigator.userAgent) || {};
const device = ua.device || { type: 'desktop' };

ReactDOM.render(
    device.type === 'desktop' ? <AppDesktop /> : <AppMobile />,
    document.querySelector('.Grid')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
