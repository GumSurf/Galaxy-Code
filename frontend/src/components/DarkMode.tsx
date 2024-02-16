import React from 'react';
import { useDarkMode } from './DarkModeContext';

const DarkModeToggle: React.FC = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 9999,
  };

  return (
    <div style={buttonStyle}>
      <button
        className={`px-4 py-2 flex items-center ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Mode Clair' : 'Mode Sombre'}
        {darkMode ? (
          <span role="img" aria-label="Soleil" className="ml-2">
            ☀️
          </span>
        ) : (
          <span role="img" aria-label="Lune" className="ml-2">
            🌙
          </span>
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
