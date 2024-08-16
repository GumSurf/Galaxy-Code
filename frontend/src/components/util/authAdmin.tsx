import React, { createContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { API_ROUTES } from './constant';

interface AuthContextProps {
    user: any;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: async () => { },
    logout: () => { },
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);

    const login = async (email: string, password: string) => {
        
        const formData = {
            email,
            password
        };

        try {
            // Étape 1: Authentifier l'utilisateur et récupérer le token
            const response = await axios.post(`${API_ROUTES.SIGN_IN}`, { email, password });
            const access_token = response.data.token;
            localStorage.setItem('token', access_token);

            // Étape 2: Récupérer les données de l'utilisateur avec le token
            const userResponse = await axios.get(`${API_ROUTES.USER_PROFILE}`, {
                headers: { 'Authorization': `Bearer ${access_token}` },
            });

            const userData = userResponse.data;

            // Étape 3: Vérification du rôle de l'utilisateur
            if (userData.role !== 'admin') {
                console.error('Accès refusé. Seuls les administrateurs peuvent se connecter.');
                alert('Accès refusé. Seuls les administrateurs peuvent se connecter.');
                logout(); // Déconnecter si l'utilisateur n'est pas admin
                return;
            }

            // Si l'utilisateur est admin, on le connecte
            setUser({ email: userData.email, role: userData.role, token: access_token });

        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
