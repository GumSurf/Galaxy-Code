import React from 'react';
interface Props {
    // Définissez ici les propriétés (props) que votre composant acceptera
}

const PresBlog: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="container mx-auto md:px-6">
                <section className="pb-32 text-center lg:text-left">
                    <h2 className="mb-12 text-center text-3xl font-bold dark:text-white">
                        Articles du blog
                    </h2>

                    <div className="grid gap-x-6 lg:grid-cols-3">
                        <div className="mb-12 lg:mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg" className="w-full" />
                                <a href="#!">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>
                            <h5 className="mb-4 text-lg font-bold dark:text-neutral-100">Le Guide du Développeur Web en Herbe</h5>
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2 dark:text-neutral-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                </svg>
                                <p className='dark:text-neutral-100'>Hot news</p>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Un blog axé sur les conseils pratiques, les tutoriels étape par étape et les ressources essentielles pour 
                                les débutants souhaitant se lancer dans le développement web, couvrant HTML, CSS, JavaScript et plus encore.
                            </p>
                        </div>

                        <div className="mb-12 lg:mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/045.jpg" className="w-full" />
                                <a href="#!">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>

                            <h5 className="mb-4 text-lg font-bold dark:text-neutral-100">Le Monde de la Conception Web Simplifiée</h5>
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2 dark:text-neutral-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                </svg>
                                <p className='dark:text-neutral-100'>Experiment</p>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Un blog centré sur la simplification des concepts de design web, offrant des astuces visuelles, 
                                des exemples concrets et des analyses pour aider les novices à créer des interfaces web esthétiques 
                                et conviviales.
                            </p>
                        </div>

                        <div className="mb-0">
                            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.jpg" className="w-full" />
                                <a href="#!">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                                </a>
                            </div>

                            <h5 className="mb-4 text-lg font-bold dark:text-neutral-100">Le Voyage du Développeur avec Django : Un Guide pour Débutants</h5>
                            <div className="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2 dark:text-neutral-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                                <p className='dark:text-neutral-100'>Family friendly</p>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300">
                                Un blog qui explore le framework Django pour les débutants en développement web, 
                                offrant des tutoriels pas à pas, des conseils de développement, et des exemples 
                                pratiques pour créer des applications web dynamiques et performantes.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PresBlog;
