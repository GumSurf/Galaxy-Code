const API_URL = 'http://localhost:5678';

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/register`,
  SIGN_IN: `${API_URL}/auth/login`,
  TUTORIELS: `${API_URL}/api/tutoriels`,
  BLOGS: `${API_URL}/api/blogs`,
  CONFIRM_EMAIL: `${API_URL}/confirm-email`,
  USER_PROFILE: `${API_URL}/user/profile`,
  API_LOGIN: `${API_URL}/api/login`,
  API_VALIDATE_TOKEN: `${API_URL}/api/validate-token`,
  API: `${API_URL}/api`,
};

export const APP_ROUTES = {
  HOME: '/',
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  TUTORIELS: '/tutoriel',
  TUTORIEL: '/tutoriel/:id',
  PROFILE: '/Profile',
  ADMIN_LOGIN: '/Admin/Connexion',
  ADMIN_DASHBOARD: '/Admin/Edit',
  ADMIN_DETAIL: '/article/:id',
  BLOG_DETAIL: '/blogs/:id',
  BLOGS: '/blogs'
};