import React from 'react';
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
            <section className={`background-radial-gradient ${!darkMode ? 'background-radial-gradient-clair' : ''}`}>
                <DarkModeToggle />
                <SignUpPage />
            </section>
        </div>
    );
}

export default Register;
