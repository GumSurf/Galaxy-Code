import React, { useEffect, useState } from 'react';
import { Card, Button } from 'flowbite-react';

export default function TutorialsPage() {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5678/tutorials')
            .then(response => response.json())
            .then(data => {
                setTutorials(data);
            })
            .catch(error => console.error('Error fetching tutorials:', error));
    }, []);

    return (
        <div className="container mt-0 mb-0 min-h-screen my-24 mx-auto md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold dark:text-gray-100">
                Tous les Tutoriels
            </h2>
            <div className='flex justify-center flex-wrap gap-8'>
                {tutorials.map(tutorial => (
                    <Card key={tutorial.id} className="max-w-sm">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {tutorial.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {tutorial.text}
                        </p>
                        <Button>
                            <a href={tutorial.link}>Lire la suite</a>
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}
