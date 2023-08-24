import Header from '../../components/Header/Header'

import React from 'react'
import * as S from '../../pages/Pokebola/styles'
import { PokemonCardContext } from '../../context/PokemonCardContext'
import CardPokemon from '../../components/CardPokemon/CardPokemon'
import {useContext} from 'react'

const Pokebola = () => {

  const {pokemonCart} = useContext(PokemonCardContext)

  return (
    <div>
      <Header/>
      <S.CardContainer>

        {pokemonCart.map((pokemon) =>(
        
            <CardPokemon
              pokemon={pokemon}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types[0].type.name || 'normal'}
              id={pokemon.id}
            />
          

        ))}
      </S.CardContainer>

    </div>
  )
}

export default Pokebola