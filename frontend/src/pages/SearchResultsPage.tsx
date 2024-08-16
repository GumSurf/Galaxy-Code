import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_ROUTES } from '../components/util/constant';

interface Paragraph {
    type: string;
    content: string;
}

interface Comment {
    author: string;
    content: string;
    createdAt: string;
}

interface Tutorial {
    _id: string;
    title: string;
    content: Paragraph[];
    author: string;
    comments: Comment[];
    createdAt: string;
    updatedAt: string;
}

interface Blog {
    _id: string;
    title: string;
    content: Paragraph[];
    author: string;
    comments: Comment[];
    createdAt: string;
    updatedAt: string;
}

const SearchResultsPage: React.FC = () => {
    const [searchResults, setSearchResults] = useState<{ tutorials: Tutorial[]; blogs: Blog[] }>({
        tutorials: [],
        blogs: [],
    });
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Récupérer le terme de recherche de l'URL
        const queryParams = new URLSearchParams(location.search);
        const searchTerm = queryParams.get('q')?.toLowerCase() || '';

        // Appel API pour récupérer les tutoriels et blogs
        const fetchData = async () => {
            setLoading(true);
            try {
                const [tutorialsResponse, blogsResponse] = await Promise.all([
                    axios.get(`${API_ROUTES.TUTORIELS}?search=${searchTerm}`),
                    axios.get(`${API_ROUTES.BLOGS}?search=${searchTerm}`)
                ]);

                console.log("tutorialsResponse = ", tutorialsResponse);
                console.log("blogsResponse = ", blogsResponse);

                setSearchResults({
                    tutorials: tutorialsResponse.data,
                    blogs: blogsResponse.data,
                });
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
                setSearchResults({ tutorials: [], blogs: [] });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [location.search]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Résultats de la recherche</h1>

            {loading ? (
                <p>Chargement des résultats...</p>
            ) : (
                <>
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Tutoriels</h2>
                        {searchResults.tutorials.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {searchResults.tutorials.map(tutorial => (
                                    <li key={tutorial._id} className="mb-2">
                                        <h3 className="text-lg font-medium">{tutorial.title}</h3>
                                        {/* Affichage du contenu des tutoriels */}
                                        {tutorial.content.map((paragraph, index) => (
                                            <p key={index}>{paragraph.content}</p>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Aucun tutoriel trouvé pour ce terme de recherche.</p>
                        )}
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Blogs</h2>
                        {searchResults.blogs.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {searchResults.blogs.map(blog => (
                                    <li key={blog._id} className="mb-2">
                                        <h3 className="text-lg font-medium">{blog.title}</h3>
                                        {/* Affichage du contenu des blogs */}
                                        {blog.content.map((paragraph, index) => (
                                            <p key={index}>{paragraph.content}</p>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Aucun blog trouvé pour ce terme de recherche.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default SearchResultsPage;
