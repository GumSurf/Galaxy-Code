// src/EditArticle.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../components/util/constant';

interface Paragraph {
  type: 'text' | 'code';
  content: string;
}

const EditArticle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<{ title: string; content: Paragraph[]; author: string }>({ title: '', content: [], author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${API_ROUTES.TUTORIELS}/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article', error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target;

    if (index !== undefined) {
      // Handle paragraph changes
      const updatedContent = [...article.content];
      updatedContent[index] = { ...updatedContent[index], [name]: value };
      setArticle({ ...article, content: updatedContent });
    } else {
      // Handle title and author changes
      setArticle({ ...article, [name]: value });
    }
  };

  const handleParagraphTypeChange = (index: number, type: 'text' | 'code') => {
    const updatedContent = [...article.content];
    updatedContent[index] = { ...updatedContent[index], type };
    setArticle({ ...article, content: updatedContent });
  };

  const handleAddParagraph = () => {
    setArticle(prev => ({
      ...prev,
      content: [...prev.content, { type: 'text', content: '' }],
    }));
  };

  const handleRemoveParagraph = (index: number) => {
    setArticle(prev => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index),
    }));
  };

  const handleUpdateArticle = async () => {
    try {
      await axios.put(`${API_ROUTES.TUTORIELS}/${id}`, article);
      navigate('/Admin/Edit');
    } catch (error) {
      console.error('Error updating article', error);
    }
  };

  if (!article) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Article</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={article.title}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      {article.content.map((paragraph, index) => (
        <div key={index} className="mb-4">
          <select
            value={paragraph.type}
            onChange={(e) => handleParagraphTypeChange(index, e.target.value as 'text' | 'code')}
            className="border rounded p-2 mb-2"
          >
            <option value="text">Text</option>
            <option value="code">Code</option>
          </select>
          <textarea
            name="content"
            placeholder={paragraph.type === 'code' ? 'Code content' : 'Text content'}
            value={paragraph.content}
            onChange={(e) => handleChange(e, index)}
            className="w-full p-2 border rounded"
            rows={5}
          />
          <button
            onClick={() => handleRemoveParagraph(index)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Remove Paragraph
          </button>
        </div>
      ))}
      <button
        onClick={handleAddParagraph}
        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition mb-4"
      >
        Add Paragraph
      </button>
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={article.author}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleUpdateArticle}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Update Article
      </button>
    </div>
  );
};

export default EditArticle;
