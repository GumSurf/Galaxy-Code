import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTutoriel } from '../components/util/common'

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

    const params = useParams<{ id: string }>();
    console.log("params = ", params);

    useEffect(() => {
        const fetchTutorial = async () => {
            if (!params.id) {
                return <div>Error: No Id Found</div>;
            }
            const data = await getTutoriel(params.id);
            if (data) {
                setTutorial(data);
                setLoading(false);
            }
        }
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
