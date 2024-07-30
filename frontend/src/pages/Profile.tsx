import React from 'react';
import UserProfile from '../components/account/UserProfile';
import DarkModeToggle from '../components/DarkMode';

import { useDarkMode } from '../components/DarkModeContext';
import '../App.css';
import '../styles/custom.css';
import '../styles/output.css';

const Profile = () => {
    const { darkMode } = useDarkMode();

    return (
        <div>
            <section className={`background-radial-gradient ${!darkMode ? 'background-radial-gradient-clair' : ''}`}>
                <DarkModeToggle />
                <UserProfile />
            </section>
        </div>
    );
};

export default Profile;
