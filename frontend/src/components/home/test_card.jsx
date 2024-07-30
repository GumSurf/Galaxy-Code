// Assurez-vous d'importer useEffect et useState si vous utilisez React functionnal components
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'flowbite-react';

export default function CardWithActionButton() {
    // Définir un state pour stocker les données des tutoriels
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        // Faire une requête à votre backend pour récupérer les données des tutoriels
        fetch('http://localhost:5678/api/tutoriels')
            .then(response => response.json())
            .then(data => {
                // Mettre à jour le state avec les données récupérées
                setTutorials(data.slice(0, 3)); // Pour afficher seulement les 3 derniers tutoriels
            })
            .catch(error => console.error('Error fetching tutorials:', error));
    }, []); // Le tableau vide assure que useEffect ne se déclenche qu'une seule fois lors du montage du composant

    return (
        <div className="container my-24 mx-auto md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold dark:text-gray-100">
                Tutorials
            </h2>
            <div className='flex justify-center space-x-12 mb-8'>
                {/* Mapper sur les données des tutoriels pour afficher les cartes */}
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