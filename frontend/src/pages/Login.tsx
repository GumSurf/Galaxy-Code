import React from 'react';
import LoginForm from '../components/login/LoginForm'; // Import du composant de formulaire de connexion
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignUpPage from '../components/register/SignUpPage';
import DarkModeToggle from '../components/DarkMode';

import { useDarkMode } from '../components/DarkModeContext';
import '../App.css';
import '../styles/custom.css';
import '../styles/output.css';

const LoginPage = () => {
    const { darkMode } = useDarkMode();

    return (
        <div>
            <Header />
            <section className={`background-radial-gradient ${!darkMode ? 'background-radial-gradient-clair' : ''}`}>
                <DarkModeToggle />
                <h2>Connexion</h2>
                <LoginForm />
            </section>
            <Footer />
        </div>
    );
};

export default LoginPage;
