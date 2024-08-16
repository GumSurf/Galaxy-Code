import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock'; // Assurez-vous que le chemin est correct
import { API_ROUTES } from '../components/util/constant';

interface Paragraph {
  type: 'text' | 'code';
  content: string;
}

interface Article {
  _id: string;
  title: string;
  content: Paragraph[];
  author: string;
}

const AdminDashboard: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    content: [{ type: 'text', content: '' }],
    author: '',
  });
  const [selectedType, setSelectedType] = useState<'tutoriels' | 'blogs'>('tutoriels');

  useEffect(() => {
    fetchArticles();
  }, [selectedType]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get<Article[]>(`${API_ROUTES.API}/${selectedType}`);
      console.log(response.data);
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles', error);
    }
  };

  const handleCreateArticle = async () => {
    try {
      await axios.post(`${API_ROUTES.API}/${selectedType}`, newArticle);
      fetchArticles();
    } catch (error) {
      console.error('Error creating article', error);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    try {
      await axios.delete(`${API_ROUTES.API}/${selectedType}/${id}`);
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article', error);
    }
  };

  const handleAddParagraph = () => {
    setNewArticle(prev => ({
      ...prev,
      content: [...prev.content, { type: 'text', content: '' }],
    }));
  };

  const handleRemoveParagraph = (index: number) => {
    setNewArticle(prev => {
      const updatedContent = [...prev.content];
      updatedContent.splice(index, 1);
      return { ...prev, content: updatedContent };
    });
  };

  const handleParagraphChange = (index: number, field: keyof Paragraph, value: string) => {
    setNewArticle(prev => {
      const updatedContent = [...prev.content];
      updatedContent[index] = { ...updatedContent[index], [field]: value };
      return { ...prev, content: updatedContent };
    });
  };

  const handleParagraphTypeChange = (index: number, type: 'text' | 'code') => {
    setNewArticle(prev => {
      const updatedContent = [...prev.content];
      updatedContent[index] = { ...updatedContent[index], type };
      return { ...prev, content: updatedContent };
    });
  };

  const handleCodeChange = (index: number, newCode: string) => {
    handleParagraphChange(index, 'content', newCode);
  };

  const truncateContent = (content: Paragraph[], length: number) => {
    if (!Array.isArray(content)) {
      return '';
    }

    return content
      .map(paragraph => paragraph.type === 'code' ? 'Code Block' : paragraph.content)
      .join(' ')
      .substring(0, length) + (content.length > length ? '...' : '');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <button
          onClick={() => setSelectedType('tutoriels')}
          className={`block w-full p-2 text-left rounded mb-2 ${selectedType === 'tutoriels' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Tutoriels
        </button>
        <button
          onClick={() => setSelectedType('blogs')}
          className={`block w-full p-2 text-left rounded ${selectedType === 'blogs' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Blogs
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Create Article</h2>
          <input
            type="text"
            placeholder="Title"
            value={newArticle.title}
            onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
            className="w-full p-2 border rounded mb-4"
          />
          {newArticle.content.map((paragraph, index) => (
            <div key={index} className="mb-4">
              <select
                value={paragraph.type}
                onChange={(e) => handleParagraphTypeChange(index, e.target.value as 'text' | 'code')}
                className="border rounded p-2 mb-2"
              >
                <option value="text">Text</option>
                <option value="code">Code</option>
              </select>
              {paragraph.type === 'code' ? (
                <CodeBlock
                  language="javascript"
                  code={paragraph.content}
                  onChange={(newCode) => handleCodeChange(index, newCode)}
                />
              ) : (
                <textarea
                  placeholder="Text content"
                  value={paragraph.content}
                  onChange={(e) => handleParagraphChange(index, 'content', e.target.value)}
                  className="w-full p-2 border rounded"
                  rows={5}
                />
              )}
              <button
                onClick={() => handleRemoveParagraph(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-2"
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
            placeholder="Author"
            value={newArticle.author}
            onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={handleCreateArticle}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Create Article
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Articles List</h2>
          <ul>
            {articles.map((article) => (
              <li key={article._id} className="mb-4 p-4 border-b last:border-b-0">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="mb-2">{truncateContent(article.content, 100)}</p>
                <div className="flex space-x-2">
                  <Link to={`/article/${article._id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    View
                  </Link>
                  <Link to={`/edit/${article._id}`} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteArticle(article._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
