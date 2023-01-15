import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './global.css';
import { ResultContextProvider } from './contexts/ResultContextProvider';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <ResultContextProvider>
        <Router>
        <App />
        </Router>
    </ResultContextProvider>
        );
//  ReactDOM.render(
//     <Router>
//     <App />
// </Router>
//  ,document.getElementById('root'));



