import { Link, useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/images/Galaxy-Code.png';
import { isUserLoggedIn, logoutUser } from './util/auth';
import { useState } from 'react';

const navigation = [
    { name: 'Tutoriel', href: '/Tutoriel', current: true },
    { name: 'Cours', href: '#', current: false },
    { name: 'Blog', href: '/blogs', current: false },
    { name: 'Forum', href: '#', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    const acceuille = '/';
    const loginText = isUserLoggedIn() ? 'Mon profil' : 'Se connecter';
    const loginLink = isUserLoggedIn() ? '/Profile' : '/Connexion';
    const registerText = isUserLoggedIn() ? 'Déconnécté' : 'S\'inscrire';
    const registerLink = isUserLoggedIn() ? '/Deconnecte' : '/Inscription';
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogout = () => {
        logoutUser();
        navigate('/');
    };

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            // Si le champ de recherche n'est pas vide, effectuer la recherche
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        } else {
            // Sinon, vous pouvez choisir d'afficher un message d'erreur ou simplement ne rien faire
            alert('Veuillez entrer un terme de recherche.');
        }
    };

    return (
        <Disclosure as="nav" className="bg-gray-100 dark:bg-custom">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black dark:text-white hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to={acceuille}>
                                        <img
                                            className="h-9 w-auto"
                                            src={Logo}
                                            alt="Logo Galaxy Code"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-8 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white dark:bg-gray-700 dark:text-white' : 'text-black hover:bg-gray-300 dark:hover:bg-gray-900 hover:text-black dark:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Barre de recherche */}
                            <div className="relative flex items-center w-full max-w-xs ml-auto sm:ml-0 sm:pl-6">
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Rechercher..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Rechercher au press de la touche "Entrée"
                                />
                                <button
                                    className="absolute right-0 p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700"
                                    onClick={handleSearch}
                                >
                                    Rechercher
                                </button>
                            </div>

                            {isUserLoggedIn() ? (
                                <>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <Link to={loginLink}>
                                            <button
                                                type="button"
                                                className="relative rounded-full bg-gray-100 dark:bg-custom p-1 text-black dark:text-white hover:text-white dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <p className='text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-900 rounded-md px-3 py-2 text-sm font-medium'>{loginText}</p>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md">{registerText}</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <Link to={loginLink}>
                                            <button
                                                type="button"
                                                className="relative rounded-full bg-gray-100 dark:bg-custom p-1 text-black dark:text-white hover:text-white dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <p className='text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-900 rounded-md px-3 py-2 text-sm font-medium'>{loginText}</p>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <Link to={registerLink}>
                                            <button
                                                type="button"
                                                className="relative rounded-full bg-gray-100 dark:bg-custom p-1 text-gray-400 dark:text-purple-700 hover:text-white dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <p className='text-white bg-purple-700 dark:bg-purple-700 hover:bg-gray-700 dark:hover:bg-gray-900 dark:text-white rounded-md px-3 py-2 text-sm font-medium'>{registerText}</p>
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white dark:bg-gray-700 dark:text-white' : 'text-gray-300 hover:bg-gray-700 dark:hover:bg-gray-900 hover:text-white dark:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
