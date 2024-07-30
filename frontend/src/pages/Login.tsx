import React from 'react';
import LoginForm from '../components/login/LoginForm';
import DarkModeToggle from '../components/DarkMode';

import { useDarkMode } from '../components/DarkModeContext';
import '../App.css';
import '../styles/custom.css';
import '../styles/output.css';

const LoginPage = () => {
    const { darkMode } = useDarkMode();

    return (
        <div>
            <section className={`background-radial-gradient ${!darkMode ? 'background-radial-gradient-clair' : ''}`}>
                <DarkModeToggle />
                <h2>Connexion</h2>
                <LoginForm />
            </section>
        </div>
    );
};

export default LoginPage;
