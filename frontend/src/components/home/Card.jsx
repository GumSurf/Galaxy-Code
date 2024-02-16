'use client';

import { Button, Card } from 'flowbite-react';

export default function CardWithActionButton() {
    return (
        <div className="container my-24 mx-auto md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold dark:text-gray-100">
                Tutorials
            </h2>
            <div className='flex justify-center space-x-12 mb-8'>

                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            Initiation au Développement Web avec HTML et CSS
                        </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>
                            Apprenez à créer un blog personnalisé en utilisant WordPress, de l'installation à la publication de contenu, pour les débutants en développement web.
                        </p>
                    </p>
                    <Button>
                        <p>
                            Lire la suite
                        </p>
                    </Button>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            Construction d'une Application Web React.js
                        </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>
                            Développez une application web interactive avec React.js, idéal pour les débutants cherchant à comprendre les bases de React et la création d'applications web modernes.
                        </p>
                    </p>
                    <Button>
                        <p>
                            Lire la suite
                        </p>
                    </Button>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            Portfolio Web avec HTML, CSS et JavaScript
                        </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>
                            Créez un portfolio personnel attrayant en utilisant HTML, CSS et JavaScript, parfait pour les débutants voulant présenter leurs compétences en développement web.
                        </p>
                    </p>
                    <Button>
                        <p>
                            Lire la suite
                        </p>
                    </Button>
                </Card>
            </div>
        </div>
    )
}