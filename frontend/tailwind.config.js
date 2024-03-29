/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // Mettez à jour les chemins en fonction de votre structure de projet
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                custom: 'hsl(218, 41%, 15%)',
            },
        }
    },
    fontFamily: {},
    variants: {
        extend: {},
    },
    plugins: [
        [require('flowbite/plugin')]
    ],
}