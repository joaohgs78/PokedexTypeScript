import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { getTypeImageByType } from '../../components/CardPokemon/vector/getTypesPokemonImg'

//@ts-ignore
import pokebola from '../../assets/pokebola.png'
import {
  PokemonCardContext,
  PokemonData
} from '../../context/PokemonCardContext'

import { useContext } from 'react'
import * as S from '../../components/CardPokemon/styles'

//@ts-ignore
import pokeBolaSemFundo from '../../assets/pokeBolaSemFundo.png'
//@ts-ignore
import pokebolaaberta from '../../assets/pokebolaberta4.png'

const CardPokemon = ({
  name,
  image,
  types,
  pokemon,
  id
}: {
  pokemon: PokemonData
  name: string
  image: string
  types: string
  id: number
}) => {
  const { addToPokemon, removePokemon } = useContext(PokemonCardContext)

  const location = useLocation()

  return (
    // TRAZER O TYPE

    <S.Card key={id} name={pokemon.name} type={types}>
      <div className="imgBx">
        <img src={image} alt="Pokemon sprites" />
      </div>

      <S.pokeImg src={pokeBolaSemFundo} alt="Pokebola Sem fundo" />

      <div className="contentBx">
        <S.TextNamePokemon>{name}</S.TextNamePokemon>
        <div className="size">
          <S.pokeTypes>
            {Object.values(pokemon.types).map((typeInfo) => {
              return (
                <S.pokeTypesImg
                  key={typeInfo.type.name}
                  src={getTypeImageByType(typeInfo.type.name)}
                />
              )
            })}
          </S.pokeTypes>
        </div>

        {location.pathname === '/' && (
          <button onClick={() => addToPokemon(pokemon)}>
            <img className="pokebola" src={pokebola} alt="" />
          </button>
        )}
        {location.pathname === '/pokebola' && (
          <button onClick={() => removePokemon(id)} >
            <img className="pokebola" src={pokebolaaberta} alt="" />
          </button>
        )}

      

        <S.LinkStyled to={`/pokemon/${name}`}>Detalhes</S.LinkStyled>
      </div>
    </S.Card>
  )
}

export default CardPokemon
