import React from 'react';

const Pokemon = props => {
  const { name, pokedexNum, element, description } = props;

  return (
    <div>
      <h1>Name: {name}</h1>
      <h3>Pokedex #: {pokedexNum}</h3>
      <h3>Element: {element}</h3>
      <p>About this pokemon: {description}</p>
    </div>
  );
};

export default Pokemon;
