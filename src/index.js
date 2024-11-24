import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  let resizeTimeout;
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (/ResizeObserver loop completed with undelivered notifications/.test(args[0])) {
      // Suppress this specific error message
      return;
    }
    originalConsoleError(...args);  // Otherwise log the error
  };
  window.addEventListener('resize', function () {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => {
      // Suppress the ResizeObserver error, and reset after resize
    }, 200);  // Adjust the timeout value if needed
  });
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
