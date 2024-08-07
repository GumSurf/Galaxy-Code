import React, { createContext, useState, ReactNode } from 'react';
import axios from 'axios';

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

        try {
            const response = await axios.post('https://galaxy-code-backend.vercel.app/auth/login', { email, password });
            const { access_token } = response.data;
            setUser({ email, token: access_token });
            localStorage.setItem('token', access_token);
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
