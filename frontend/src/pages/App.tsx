import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../components/util/authAdmin';
import Accueil from './Home';
import Register from './Register';
import Login from './Login';
import Tutoriel from './Tutoriel';
import TutorialDetail from './TutorielDetail';
import Profile from './Profile';
import Layout from '../components/util/layout';
import AdminLoginPage from './AdminLoginPage';
import AdminDashboard from './AdminDashboard';
import AdminRoute from '../components/Route/AdminRoute';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path='/login' element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/tutoriel" element={<Tutoriel />} />
                        <Route path="/tutoriel/:id" element={<TutorialDetail />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/admin/login" element={<AdminLoginPage />} />
                        <Route path="/admin/dashboard" element={<AdminRoute element={<AdminDashboard />} />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </Router >
    );
}

export default App;
