const API_URL = 'https://galaxy-code-backend.vercel.app';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  TUTORIELS: `${API_URL}/api/tutoriels`,
  BEST_RATED: `${API_URL}/api/books/bestrating`,
  CONFIRM_EMAIL: `${API_URL}/confirm-email`,
};

export const APP_ROUTES = {
  HOME: '/Galaxy-Code',
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  TUTORIELS: '/tutoriel',
  TUTORIEL: '/tutoriel/:id',
  PROFILE: '/Profile',
  ADMIN_LOGIN: '/Ajouter',
  ADMIN_DASHBOARD: 'tutoriel/modifier/:id',
};