import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AdminRouteProps {
  element: JSX.Element;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ element }) => {
  const location = useLocation(); // Utilisé pour rediriger vers la page initiale après la connexion
  const isAuthenticated = Boolean(localStorage.getItem('token')); // Remplace par ta logique d'authentification

  // Si l'utilisateur est authentifié, rendre le composant enfant
  if (isAuthenticated) {
    return element;
  }

  // Sinon, rediriger vers la page de login et mémoriser la page actuelle
  return <Navigate to="/admin/login" state={{ from: location }} />;
};

export default AdminRoute;
