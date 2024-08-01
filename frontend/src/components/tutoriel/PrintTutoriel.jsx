import React, { useEffect, useState } from 'react';
import { Card, Button } from 'flowbite-react';
import { getTutoriels } from '../util/common';
import { Link } from 'react-router-dom';

export default function TutorialsPage() {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        async function getTutorielsList() {
          const data = await getTutoriels();
          if (data) {
            setTutorials(data);
          }
        }
        getTutorielsList();
      }, []);

    console.log("tutorial = ", tutorials);

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
                        <p className="font-normal text-gray-700 dark:text-gray-400">{tutorial.content.slice(0, 100)}...</p>
                        <Button>
                            <Link to={`/tutoriel/${tutorial._id}`}>Lire la suite</Link>
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}
