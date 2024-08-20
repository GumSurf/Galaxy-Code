import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock'; // Assurez-vous que CodeBlock est correctement importé
import { API_ROUTES } from '../components/util/constant';
import { getTimeDifference } from '../components/util/getTimeDifference'; // Import de la fonction

interface Paragraph {
    type: 'text' | 'code';
    content: string;
}

interface Comment {
    author: string;
    content: string;
    createdAt: string; // ISO 8601 date string
}

interface ArticleProps {
    title: string;
    content: Paragraph[];
    author: string;
    comments: Comment[]; // Ajout des commentaires
}

interface User {
    username: string;
    emailVerified: boolean;
}

// Fonction pour remplacer les sauts de ligne par des balises <br>
const replaceLineBreaks = (text: string) => {
    return text.split('\n').map((item, index) => (
        <React.Fragment key={index}>
            {item}
            <br />
        </React.Fragment>
    ));
};

const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Extraction de l'ID de l'URL
    const [article, setArticle] = useState<ArticleProps | null>(null);
    const [newComment, setNewComment] = useState<string>('');
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get<ArticleProps>(`${API_ROUTES.TUTORIELS}/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching article', error);
            }
        };

        fetchArticle();
        checkUserAuthentication();
    }, [id]);

    const checkUserAuthentication = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Pas de token trouvé. Veuillez vous connecter.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get<User>(`${API_ROUTES.USER_PROFILE}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            setUser(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Error fetching user data', error);
            setError('Erreur lors de la récupération des données utilisateur');
        } finally {
            setLoading(false);
        }
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!isAuthenticated) {
            alert('Vous devez être connecté pour ajouter un commentaire.');
            return;
        }

        if (!user) {
            alert('Utilisateur non trouvé. Veuillez vous reconnecter.');
            return;
        }

        if (user?.emailVerified) {
            alert('Votre email doit être vérifié pour ajouter un commentaire.');
            return;
        }

        try {
            await axios.post(
                `${API_ROUTES.TUTORIELS}/${id}/comments`,
                {
                    content: newComment,
                    author: user.username,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );

            // Rafraîchir les commentaires après l'ajout
            const updatedResponse = await axios.get<ArticleProps>(`${API_ROUTES.TUTORIELS}/${id}`);
            setArticle(updatedResponse.data);
            setNewComment('');
        } catch (error) {
            console.error('Error adding comment', error);
        }
    };

    const handleCodeChange = (index: number, newCode: string) => {
        if (article) {
            const updatedContent = [...article.content];
            updatedContent[index] = { ...updatedContent[index], content: newCode };
            setArticle({ ...article, content: updatedContent });
        }
    };

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (!article) {
        return <p className="text-center text-gray-500">Article not found.</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{article.title}</h1>
            <p className="text-sm text-gray-500 mb-8">By {article.author}</p>

            {article.content.map((paragraph, index) => (
                <div key={index} className="mb-6">
                    {paragraph.type === 'code' ? (
                        <CodeBlock
                            language="javascript"
                            code={paragraph.content}
                            onChange={(newCode) => handleCodeChange(index, newCode)}
                        />
                    ) : (
                        <p className="text-lg text-gray-700">
                            {replaceLineBreaks(paragraph.content)}
                        </p>
                    )}
                </div>
            ))}

            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
                {article.comments.length === 0 ? (
                    <p className="text-gray-600">No comments yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {article.comments.map((comment, index) => (
                            <li key={index} className="border-b border-gray-300 pb-4">
                                <p className="font-semibold text-gray-800">{comment.author}</p>
                                <p className="text-sm text-gray-500">{getTimeDifference(comment.createdAt)}</p>
                                <p className="text-gray-700 mt-2">{comment.content}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {isAuthenticated && (
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a Comment</h2>
                    <form onSubmit={handleCommentSubmit}>
                        <textarea
                            value={newComment}
                            onChange={handleCommentChange}
                            rows={4}
                            placeholder="Write your comment here..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Submit Comment
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ArticleDetail;
