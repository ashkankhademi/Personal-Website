import React from 'react';
import ReactDOM from 'react-dom/client';
import { AboutBox } from './animated-description';
// Removed: import '../styles3.css';

const container = document.getElementById('about-box-root');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<AboutBox />);
} else {
    console.error("❌ Could not find #about-box-root in the DOM");
}


