import React, { useEffect, useState } from 'react';
import { Button, Card } from 'flowbite-react';
import { API_ROUTES } from '../util/constant';

export default function CardWithActionButton() {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        fetch(`${API_ROUTES.TUTORIELS}`)
            .then(response => response.json())
            .then(data => {
                setTutorials(data.slice(0, 3)); // Pour afficher seulement les 3 derniers tutoriels
            })
            .catch(error => console.error('Error fetching tutorials:', error));
    }, []);

    return (
        <div className="container my-24 mx-auto md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold dark:text-gray-100">
                Tutorials
            </h2>
            <div className='flex justify-center space-x-12 mb-8'>
                {tutorials.map(tutorial => (
                    <Card key={tutorial._id} className="max-w-sm">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {tutorial.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{tutorial.content.slice(0, 100)}...</p>
                        <Button>
                            <a href={"tutoriel/" + tutorial._id}>Lire la suite</a>
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}