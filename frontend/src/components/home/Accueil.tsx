import React from 'react';
import Learn from '../../assets/images/learn.png';

interface Props {
    // Définissez ici les propriétés (props) que votre composant acceptera
}

const Accueil: React.FC<Props> = (props) => {
    // Utilisez vos propriétés (props) et état (state) ici

    return (
        <div>
            <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-gray-900 dark:text-gray-100">
                                Explorez l'Univers du Code <br /><span className="text-cyan-700 dark:text-cyan-400">avec Galaxy Code</span>
                            </h1>
                            <a className="mb-2 inline-block rounded bg-gray-900 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white dark:text-white dark:bg-gray-800 transition duration-150 ease-in-out hover:bg-purple-800 md:mr-2 md:mb-0"
                                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Tutoriel</a>
                            <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-gray-900 dark:text-white transition duration-150 ease-in-out hover:bg-gray-900 hover:text-gray-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">S'inscrire</a>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <img src={Learn}
                                className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;
