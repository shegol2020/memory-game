import React from 'react';
import ReactDom from "react-dom/client";
import { StrictMode } from 'react';
import './index.css';
import {images} from './data.js'
import App from './App';


const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App images={images}/>
    </StrictMode>
)


