import React from 'react';
import Learn from '../assets/images/learn.png';

interface Props {
    // Définissez ici les propriétés (props) que votre composant acceptera
}

const Accueil: React.FC<Props> = (props) => {
    // Utilisez vos propriétés (props) et état (state) ici

    return (
        <div>
            <section className="background-radial-gradient">
                <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="mt-12 lg:mt-0">
                                <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                                    Explorez l'Univers du Code <br /><span className="text-[hsl(218,81%,75%)]">avec Galaxy Code</span>
                                </h1>
                                <a className="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
                                    data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Tutoriel</a>
                                <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                                    data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">S'inscrire</a>
                            </div>
                            <div className="mb-12 lg:mb-0">
                                <img src={Learn}
                                    className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-24 mx-auto md:px-6">
                    <section className="pb-32 text-center lg:text-left">
                        <h2 className="mb-12 text-center text-3xl font-bold">
                            Projects we are proud of
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
                                <h5 className="mb-4 text-lg font-bold">Hollywood Exhibition</h5>
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                    </svg>
                                    Hot news
                                </div>
                                <p className="text-neutral-500 dark:text-neutral-300">
                                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
                                    vulputate. Ut vulputate est non quam dignissim elementum. Donec a
                                    ullamcorper diam.
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

                                <h5 className="mb-4 text-lg font-bold">Big Apple</h5>
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                    </svg>
                                    Experiment
                                </div>
                                <p className="text-neutral-500 dark:text-neutral-300">
                                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                                    orci, nec ornare metus semper sed. Integer volutpat ornare erat
                                    sit amet rutrum.
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

                                <h5 className="mb-4 text-lg font-bold">Sun City</h5>
                                <div className="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                    Family friendly
                                </div>
                                <p className="text-neutral-500 dark:text-neutral-300">
                                    Curabitur tristique, mi a mollis sagittis, metus felis mattis
                                    arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
                                    volutpat feugiat. Donec.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Accueil;
