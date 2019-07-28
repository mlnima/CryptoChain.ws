import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {AppProvider} from "./context/AppContext";
import {BrowserRouter} from "react-router-dom";
//import ReactDOMServer from 'react-dom/server';

ReactDOM.render(
    <AppProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AppProvider>
    , document.getElementById('root'));

serviceWorker.unregister();
