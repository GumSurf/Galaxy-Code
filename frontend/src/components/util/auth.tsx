// Fonction pour vérifier si l'utilisateur est connecté
export const isUserLoggedIn = (): boolean => {
    // Récupérer le token depuis le localStorage
    const token = localStorage.getItem('token');
  
    // Vérifier si le token est présent et non vide
    return !!token;
  };
  
  // Fonction pour déconnecter l'utilisateur
  export const logoutUser = (): void => {
    // Supprimer le token du localStorage
    localStorage.removeItem('token');
    
  };