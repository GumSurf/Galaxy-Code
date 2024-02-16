import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Home';
import Register from './Register';
import Login from './Login';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
