import React, { ReactNode, useEffect } from 'react';
import { disconnect } from './disconnect';

interface LayoutProps {
  children?: ReactNode; // children est une prop facultative de type ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      //disconnect();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      {/* Contenu de votre mise en page commune */}
      {children}
    </div>
  );
}

export default Layout;