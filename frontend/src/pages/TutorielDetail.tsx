import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Tutorial {
  id: string;
  title: string;
  content: string;
}

const TutorialDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await fetch(`https://galaxy-code-backend.vercel/api/tutoriels/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération du tutoriel');
        }
        const data = await response.json();
        setTutorial(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorial();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tutorial) {
    return <div>Tutoriel non trouvé</div>;
  }

  return (
    <div>
      <h1>{tutorial.title}</h1>
      <p>{tutorial.content}</p>
    </div>
  );
};

export default TutorialDetail;
