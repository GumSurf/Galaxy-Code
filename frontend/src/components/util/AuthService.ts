export const AuthService = {
    login: async (email: string, password: string) => {
        const response = await fetch('https://galaxy-code-backend.vercel.app/api/login', {
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
