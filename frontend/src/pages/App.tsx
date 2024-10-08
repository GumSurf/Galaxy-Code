import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../components/util/authAdmin';
import { APP_ROUTES } from '../components/util/constant';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accueil from './Home';
import Register from './Register';
import Login from './Login';
import Tutoriel from './Tutoriel';
import TutorialDetail from './ArticleDetail';
import Profile from './Profile';
import Layout from '../components/util/layout';
import AdminLoginPage from './AdminLoginPage';
import AdminDashboard from './AdminDashboard';
import ArticleDetail from './ArticleDetail';
import BlogDetail from './BlogDetail';
import EditArticle from './EditArticle';
import AdminRoute from '../components/Route/AdminRoute';
import Blogs from './PrintBlogs';
import SearchResultsPage from './SearchResultsPage';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Header />
                    <Routes>
                        <Route path={APP_ROUTES.HOME} element={<Accueil />} />
                        <Route path={APP_ROUTES.SIGN_IN} element={<Login />} />
                        <Route path={APP_ROUTES.SIGN_UP} element={<Register />} />
                        <Route path={APP_ROUTES.TUTORIELS} element={<Tutoriel />} />
                        <Route path={APP_ROUTES.TUTORIEL} element={<TutorialDetail />} />
                        <Route path={APP_ROUTES.PROFILE} element={<Profile />} />
                        <Route path={APP_ROUTES.ADMIN_LOGIN} element={<AdminLoginPage />} />
                        <Route path={APP_ROUTES.ADMIN_DASHBOARD} element={<AdminRoute element={<AdminDashboard />} />} />
                        <Route path={APP_ROUTES.ADMIN_DETAIL} element={<ArticleDetail />} />
                        <Route path={APP_ROUTES.BLOG_DETAIL} element={<BlogDetail />} />
                        <Route path={APP_ROUTES.BLOGS} element={<Blogs />} />
                        <Route path={APP_ROUTES.EDIT_ARTICLE} element={<EditArticle />} />
                        <Route path={APP_ROUTES.SEARCH} element={<SearchResultsPage />} />
                    </Routes>
                    <Footer />
                </Layout>
            </AuthProvider>
        </Router >
    );
}

export default App;
