import React from 'react';

interface Props {
    aeroline: string;
}

const Home: React.FC<Props> = ({aeroline}) => {
  return (
  <div className='home-display'>
      <h2>Bienvenido a {aeroline}</h2>
      <p>
          ¡Hola! Sabemos que quieres viajar con nuesta Aerolinea {aeroline}, Por favor diligencia el siguiente formulario 
      </p>

  </div>
  );
};

export default Home;
