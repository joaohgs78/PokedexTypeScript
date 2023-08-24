import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goToPokemonDetailPage} from '../../routes/condinator'

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
  id // stats
}: {
  pokemon: PokemonData
  name: string
  image: string
  types: string
  id: number
  // stats: Array<{
  //   base_stat: number
  //   effort: number
  //   stat: { name: string }
  // }>
}) => {
  console.log(types)

  const capitalFirstLetter = name
  const newName = capitalFirstLetter.toUpperCase()

  const typeM = types
  const newTypeM = typeM.toUpperCase()

  const { addToPokemon } = useContext(PokemonCardContext)
  console.log('aki --------------------', addToPokemon)

  const navigate = useNavigate()

  return (
    <S.Card key={''} name={''} type={types}>
      <div className="imgBx">
        <img src={image} alt="Pokemon sprites" />
      </div>

      <S.pokeImg src={pokeBolaSemFundo} alt="Pokebola Sem fundo" />

      <div className="contentBx">
        <S.TextNamePokemon>{name}</S.TextNamePokemon>
        <div className="size">
          <S.pokeTypes>
            {types.split(' ').map((type, index) => (
              <span key={index} className="type">
                <S.CardTypesImg src={getTypeImageByType(type)} alt={type} />
              </span>
            ))}
          </S.pokeTypes>
        </div>
        <button onClick={() => addToPokemon(pokemon)}>
          <img className="pokebola" src={pokebola} alt="" />
        </button>
        <button onClick={() => goToPokemonDetailPage(navigate, name, types)}>Detalhes</button>
      </div>
    </S.Card>
  )
}

export default CardPokemon
