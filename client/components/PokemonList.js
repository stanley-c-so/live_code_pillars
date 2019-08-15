import React, { Component } from 'react';
import Pokemon from './Pokemon';

// Write a component called PokemonList.
// It should have an array on its state called pokemons.
// The component should display each of the elements in the
// array as a separate Pokemon component (already created).

export default class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };
  }

  render() {
    return (
      <div>
        {this.state.pokemons.map(pokemon => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    );
  }
}
