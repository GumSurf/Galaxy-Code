import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Account from '../components/Account/UserProfile';
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
                <Account />
            </section>
            <Footer />
        </div>
    );
};

export default LoginPage;
