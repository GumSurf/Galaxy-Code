import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_ROUTES } from '../components/util/constant';

interface Blog {
  _id: string;
  title: string;
  content: { type: 'text' | 'code'; content: string }[];
  author: string;
  createdAt: string; // Date de publication au format ISO 8601
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<Blog[]>(`${API_ROUTES.BLOGS}`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs', error);
        setError('Erreur lors de la récupération des blogs.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              <Link to={`/blogs/${blog._id}`} className="text-blue-600 hover:underline">
                {blog.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              By {blog.author} | {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4">
              {blog.content[0].type === 'text' ? truncateText(blog.content[0].content, 150) : 'Code Block'}
            </p>
            <Link
              to={`/blogs/${blog._id}`}
              className="text-blue-600 hover:underline font-medium"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
