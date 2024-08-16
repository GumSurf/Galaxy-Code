import { useState, useEffect } from 'react';
import { AuthService } from './AuthService';
import { API_ROUTES } from './constant';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Initialisé à null pour indiquer l'état de chargement
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const token = AuthService.getToken();

                if (token) {
                    const response = await fetch(`${API_ROUTES.API_VALIDATE_TOKEN}`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                    });
                    const data = await response.json();
                    if (!data.valid) throw new Error('Token invalide');

                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Erreur lors de la vérification du token:', error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false); // Assurez-vous de définir isLoading sur false lorsque la vérification est terminée
            }
        };

        checkAuthStatus();
    }, []); // Dépendances vides pour s'exécuter une fois au montage

    return {
        isAuthenticated,
        isLoading, // Retourner l'état de chargement pour être utilisé dans les composants
        login: AuthService.login,
        logout: AuthService.logout
    };
};
