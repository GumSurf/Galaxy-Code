import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Home';
import Register from './Register';
import Login from './Login';
import Tutoriel from './Tutoriel';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Tutoriel" element={<Tutoriel />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
