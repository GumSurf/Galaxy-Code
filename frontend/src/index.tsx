import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import './styles/tailwind.css';
import { DarkModeProvider } from '../src/components/DarkModeContext';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

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

reportWebVitals();
