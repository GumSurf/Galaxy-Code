import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import './styles/tailwind.css';
import { DarkModeProvider } from '../src/components/DarkModeContext';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Choisissez le thème que vous préférez


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkModeProvider>
        <App />
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
