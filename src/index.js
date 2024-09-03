import React from "react";
import ReactDOM from 'react-dom/client'; // Updated import for React 18

import App from './App';

// Get the root element from your HTML
const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = ReactDOM.createRoot(rootElement);

// Render your app with the new root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
