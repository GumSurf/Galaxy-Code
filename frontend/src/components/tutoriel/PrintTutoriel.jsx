import React, { useEffect, useState } from 'react';
import { Card, Button } from 'flowbite-react';
import { getTutoriels } from '../util/common';
import { Link } from 'react-router-dom';

export default function TutorialsPage() {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        async function getTutorielsList() {
            const data = await getTutoriels();
            console.log("data = ", data);

            // Assurez-vous que data est un tableau et que chaque élément a les propriétés attendues
            if (Array.isArray(data) && data.length > 0 && data[0].title) {
                setTutorials(data);
            } else {
                console.error('Les données récupérées ne sont pas dans le format attendu.');
            }
        }
        getTutorielsList();
    }, []);

    console.log("tutorials = ", tutorials);

    return (
        <div className="container mt-0 mb-0 min-h-screen my-24 mx-auto md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold dark:text-gray-100">
                Tous les Tutoriels
            </h2>
            <div className='flex justify-center flex-wrap gap-8'>
                {tutorials.map(tutorial => (
                    <Card key={tutorial._id} className="max-w-sm">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {tutorial.title}
                        </h5>
                        <div className="font-normal text-gray-700 dark:text-gray-400">
                            {tutorial.content.map((paragraph, index) => (
                                <p key={index}>
                                    {paragraph.content}
                                </p>
                            ))}
                        </div>
                        <Button>
                            <Link to={`/tutoriel/${tutorial._id}`}>Lire la suite</Link>
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}
