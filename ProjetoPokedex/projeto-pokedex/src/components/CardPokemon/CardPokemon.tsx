import React from 'react'
import { Link } from 'react-router-dom'

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
        <button onClick={() => addToPokemon(pokemon)}>
          <img className="pokebola" src={pokebola} alt="" />
        </button>

        {/* <Link to={`/pokemon/${name}`}>Detalhes</Link> */}
        <S.LinkStyled to={`/pokemon/${name}`}>Detalhes</S.LinkStyled>
      
        
      </div>
    </S.Card>
  )
}

export default CardPokemon
