import Accueil from '../components/home/Accueil';
import Card from '../components/home/test_card';
import PresBlog from '../components/home/PresBlog';
import DarkModeToggle from '../components/DarkMode';

import { useDarkMode } from '../components/DarkModeContext';
import '../App.css';
import '../styles/custom.css';
import '../styles/output.css';

function Home() {
    const { darkMode } = useDarkMode();

    return (
        <div>
            <section className={`background-radial-gradient ${!darkMode ? 'background-radial-gradient-clair' : ''}`}>
                <DarkModeToggle />
                <Accueil />
                <Card />
                <PresBlog />
            </section>
        </div>
    );
}

export default Home;
