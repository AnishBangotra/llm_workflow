import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  let resizeTimeout;
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (/ResizeObserver loop completed with undelivered notifications/.test(args[0])) {
      return;
    }
    originalConsoleError(...args);  
  };
  window.addEventListener('resize', function () {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => {
    }, 200); 
  });
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
