import React, { useState } from 'react';

const SignUpForm = () => {
  // Déclaration des états pour les champs du formulaire
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<{ message: string, code: number } | null>(null); // Spécification du type de l'erreur
  const [confirmationMessage, setConfirmationMessage] = useState<string>(''); // Ajout d'une variable d'état pour le message de confirmation

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Création d'un objet contenant les données du formulaire
    const formData = {
      username,
      email,
      password
    };

    try {
      // Envoi de la requête POST à l'endpoint du backend
      const response = await fetch('https://galaxy-code-backend.vercel.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Vérification de la réussite de la requête
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Si la requête est réussie, mettre à jour le message de confirmation
      setConfirmationMessage('Inscription réussie! Veuillez vérifier votre e-mail pour confirmer votre adresse.');

      // Réinitialisation des champs du formulaire après soumission
      setUsername('');
      setEmail('');
      setPassword('');
      setError(null);
    } catch (err: any) {
      console.error('Erreur lors de l\'envoi de la requête:', err.message);
      setError({ message: 'Erreur lors de l\'envoi de la requête', code: 500 });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
      {confirmationMessage && <div style={{ color: 'green' }}>{confirmationMessage}</div>} {/* Afficher le message de confirmation */}
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default SignUpForm;
