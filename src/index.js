import React from 'react';
import ReactDom from "react-dom/client";
import { StrictMode } from 'react';
import './styles/index.css';
import {images, results} from './data.js'
import App from './App';


const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App images={images} results={results}/>
    </StrictMode>
)


