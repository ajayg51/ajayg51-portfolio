import React from 'react';
import App from './components/app/App.jsx';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import './index.css';
import MobileApp from './components/MobileApp.jsx';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

// mobile dev
// root.render(<MobileApp />);


const observer = new ResizeObserver(
    entries => {
        for (const entry of entries) {
            const newWidth = entry.contentRect.width;

            // console.log('The screen width has changed to ' + newWidth);
            // console.log('valu : ' + (newWidth < 1200));

            if (newWidth < 1200) {

                root.render(<MobileApp />);

            } else {
                root.render(<App />);
            }


        }
    });
observer.observe(document.body);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
