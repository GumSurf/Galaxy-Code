import React, { useState, useEffect } from 'react';
import { useAuth } from '../util/useAuth';
import { AuthService } from '../util/AuthService';

interface User {
    username: string;
    email: string;
    emailVerified: boolean;
}

const UserProfile = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        const loadAuthStatus = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false);
        };

        loadAuthStatus();
    }, []);

    useEffect(() => {
        if (isLoading) return;

        if (!isAuthenticated) {
            setError('Vous devez être connecté pour accéder à cette page.');
            setIsLoading(false);
            return;
        }

        const fetchUserData = async () => {
            const token = AuthService.getToken();
            if (!token) {
                setError('Pas de token trouvé. Veuillez vous connecter.');
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch('https://galaxy-code-backend.vercel.app/user/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                });
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données utilisateur');
                }

                const userData: User = await response.json();
                setUser(userData);
                setIsLoading(false);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('Une erreur inconnue est survenue.');
                }
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [isAuthenticated, !isLoading]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Une erreur s'est produite: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {user && (
                <div className="bg-white shadow overflow-hidden rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Informations personnelles</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Vos informations personnelles.</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nom complet</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.username}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.email}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email vérifié</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.emailVerified ? 'Oui' : 'Non'}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
