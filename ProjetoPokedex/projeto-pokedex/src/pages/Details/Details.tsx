import React from 'react'
import  { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import * as S from './styles'; // Importando seus Styled Components


const Details = () => {
  const { name } = useParams();
  const { pokemons } = useContext(PokemonContext);
  return (
    <div>Details</div>
  )
}

export default Details