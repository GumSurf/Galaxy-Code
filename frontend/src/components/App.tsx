import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Accueil from './Accueil';
import Card from './Card';

import '../App.css';
import '../styles/custom.css';
import '../styles/output.css';

function App() {
  return (
    <div>
        <Header />
        <Accueil />
        <Card />
        <Footer />
    </div>
  );
}

export default App;
