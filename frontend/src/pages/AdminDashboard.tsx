// src/AdminDashboard.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [newArticle, setNewArticle] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://galaxy-code-backend.vercel.app/api/tutoriels');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles', error);
    }
  };

  const handleCreateArticle = async () => {
    try {
      await axios.post('https://galaxy-code-backend.vercel.app/api/tutoriels', newArticle);
      fetchArticles();
    } catch (error) {
      console.error('Error creating article', error);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    try {
      await axios.delete(`https://galaxy-code-backend.vercel.app/api/tutoriels/${id}`);
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Create Article</h2>
        <input
          type="text"
          placeholder="Title"
          value={newArticle.title}
          onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newArticle.content}
          onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newArticle.author}
          onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
        />
        <button onClick={handleCreateArticle}>Create Article</button>
      </div>
      <div>
        <h2>Articles List</h2>
        <ul>
          {articles.map((article) => (
            <li key={article._id}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <button onClick={() => handleDeleteArticle(article._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
