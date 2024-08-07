// src/ArticleDetail.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock'; // Assurez-vous que CodeBlock est correctement importé

interface Paragraph {
  type: 'text' | 'code';
  content: string;
}

interface ArticleProps {
  title: string;
  content: Paragraph[];
  author: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extraction de l'ID de l'URL
  const [article, setArticle] = useState<ArticleProps | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get<ArticleProps>(`http://localhost:5678/api/tutoriels/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <p>Loading...</p>; // Affiche un message pendant le chargement des données
  }

  console.log("article = ", article);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>By {article.author}</p>
      {article.content.map((paragraph, index) => (
        <div key={index} className="mb-4">
          {paragraph.type === 'code' ? (
            <CodeBlock language="javascript" code={paragraph.content} /> // Assurez-vous que `CodeBlock` est bien configuré
          ) : (
            <p>{paragraph.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleDetail;
