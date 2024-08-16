import { API_ROUTES } from './constant';

export const AuthService = {
    login: async (email: string, password: string) => {
        const response = await fetch(`${API_ROUTES.API_LOGIN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            return data.token;
        } else {
            throw new Error(data.message);
        }
    },
    logout: () => {
        localStorage.removeItem('token');
    },
    getToken: () => {
        return localStorage.getItem('token');
    }
};
