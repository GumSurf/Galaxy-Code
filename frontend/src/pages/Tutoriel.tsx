import React from 'react';
import PrintTutoriel from '../components/tutoriel/PrintTutoriel';
import DarkModeToggle from '../components/DarkMode';

import { useDarkMode } from '../components/DarkModeContext';
import '../App.css';
import '../styles/custom.css';
import '../styles/output.css';

const Tutoriel = () => {
    const { darkMode } = useDarkMode();

    return (
        <div>
            <section className={`background-radial-gradient ${!darkMode ? 'background-radial-gradient-clair' : ''}`}>
                <DarkModeToggle />
                <PrintTutoriel />
            </section>
        </div>
    );
};

export default Tutoriel;
