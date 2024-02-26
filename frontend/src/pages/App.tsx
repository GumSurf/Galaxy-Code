import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Home';
import Register from './Register';
import Login from './Login';
import Tutoriel from './Tutoriel';
import Profile from './Profile';
import { disconnect } from '../components/util/disconnect';

function App() {
    useEffect(() => {
        const handleBeforeUnload = () => {
            disconnect();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Tutoriel" element={<Tutoriel />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
