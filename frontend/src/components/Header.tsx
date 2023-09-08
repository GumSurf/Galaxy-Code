import React from 'react';

interface Props {
  // Définissez ici les propriétés (props) que votre composant acceptera
  // Par exemple : title: string;
}

const MonComposant: React.FC<Props> = (props) => {
  // Vous pouvez accéder aux propriétés passées au composant via "props"
  // Par exemple : const { title } = props;

  return (
    <div>
      <h1>Mon Composant React</h1>
      {/* Utilisez JSX pour définir la structure du composant */}
    </div>
  );
};

export default MonComposant;