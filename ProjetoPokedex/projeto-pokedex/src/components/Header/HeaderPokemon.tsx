// HeaderPokemon.js
import React, { useContext, useState, } from 'react';
import './HeaderPokemon.css';
import { PokemonCardContext } from '../../context/PokemonCardContext'
//@ts-ignore
import logo from '../../img/logo1.png'

function HeaderPokemon() {
  

  const { addToPokemon, handleSearchName } = useContext(PokemonCardContext);

  const [selectedType, setSelectedType] = useState('');

  


  return (
    <header className='header'>
      <img className='logo' src={logo} alt="Pokemon Logo" />
      <div className='controls'>
        <input
          className='searchInput'
          type="text"
          placeholder="Pesquisar Pokémon"

          onChange={handleSearchName}
        />
        <select
          className='filterSelect'
          value={selectedType}
          
        >
          <option value="">Filtrar por Tipo</option>
          <option value="fire">Fogo</option>
          <option value="water">Água</option>
          <option value="grass">Grama</option>
          
        </select>
        <div className="pokebola">
		  <div className="pokebola-botao" ></div>
	</div>
      </div>
    </header>
  );
}

export default HeaderPokemon;
