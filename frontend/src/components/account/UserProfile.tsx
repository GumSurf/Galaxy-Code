import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState<{ username: string, email: string, createdDate: string } | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        console.log("token = ", token);
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:5678/user/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`, // Assurez-vous d'ajuster cela selon votre authentification
                        'Content-Type': 'application/json'
                    },
                });
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données utilisateur');
                }

                const userData = await response.json();
                console.log("userData = ", userData);
                setUser(userData);
                setIsLoading(false);
            } catch (error: any) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Une erreur s'est produite: {error}</div>;
    }

    console.log("user = ", user!.username);
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
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Date de création du compte</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{user.createdDate}</dd>
                            </div>
                            {/* Ajoutez d'autres informations utilisateur selon vos besoins */}
                        </dl>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
