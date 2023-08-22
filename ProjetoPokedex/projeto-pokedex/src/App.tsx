import React from 'react'
import Header from './components/Header/Header'
import { PokemonContext } from './context/PokemonContext'
import { useState, useEffect, useContext } from 'react'

import CardPokemon from './components/CardPokemon/CardPokemon'
import HeaderPokemon from './components/Header/HeaderPokemon'
import { PokemonCardProvider } from './context/PokemonCardContext';
import PokemonCardContext from './context/PokemonCardContext';


const App = () => {
  const { pokemons } = useContext(PokemonContext)
 
  
  
  return (
    <>
    
      
      <HeaderPokemon />

     
        <div className='card-container'>

        {pokemons.map((pokemon, index) => (
        <CardPokemon
          key={index} 
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          types={pokemon.types.map(typeObj => typeObj.type.name).join(", ")}
          stats={pokemon.stats}

        />
      ))}

        </div>
    
    
    </>
  )
}

export default App
