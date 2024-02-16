import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignUpPage from '../components/register/SignUpPage';
import DarkModeToggle from '../components/DarkMode';

import { useDarkMode } from '../components/DarkModeContext';
import '../App.css';
import '../styles/custom.css';
import '../styles/output.css';

function Register() {
    const { darkMode } = useDarkMode();

    return (
        <div>
            <Header />
            <section className={`background-radial-gradient ${!darkMode ? 'background-radial-gradient-clair' : ''}`}>
                <DarkModeToggle />
                <SignUpPage />
            </section>
            <Footer />
        </div>
    );
}

export default Register;
