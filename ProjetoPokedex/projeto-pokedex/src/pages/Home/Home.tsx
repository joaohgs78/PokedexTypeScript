import Header from '../../components/Header/Header'
import * as S from '../../pages/Home/styles'

// Context
import { PokemonContext } from '../../context/PokemonContext'
import { PokemonCardContext, PokemonData } from '../../context/PokemonCardContext'
import { useContext } from 'react'

//components




import CardPokemon from '../../components/CardPokemon/CardPokemon'

const Home = () => {
  const { pokemons, isLoading } = useContext(PokemonContext)
  const { pokemonCart } = useContext(PokemonCardContext)

  if (isLoading) {
    return <div>Carregando os dados da sua Pokedex...</div>
  }

  return (
    <>
    <Header/>
    <S.CardContainer>
      {pokemons
        .filter((pokemonList: PokemonData) => {
          if (
            pokemonCart.find(
              (pokemonPokedex) => pokemonList.id === pokemonPokedex.id
            )
          ) {
            return !pokemonList
          } else {
            return pokemonList
          }
        })
        .map((pokemon: PokemonData) => {
          return (
            <CardPokemon
              pokemon={pokemon}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types[0].type.name || 'normal'}
              id={pokemon.id}
            />
          )
        })}
    </S.CardContainer>
    </>
  )
}

export default Home
