import React from 'react';
import ReactDOM from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App.jsx';
import './index.css';
import { EMAILJS_PUBLIC_KEY } from './lib/emailjs.js';

// Initialise EmailJS once for the whole app — must run before any sendEmail() call.
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
