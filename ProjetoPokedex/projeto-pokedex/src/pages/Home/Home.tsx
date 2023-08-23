// Context
import * as S from './styles'
// Context
import { PokemonContext } from '../../context/PokemonContext'
import { PokemonCardContext } from '../../context/PokemonCardContext'
import { useContext } from 'react'
// imgs
//@ts-ignore
import pokebola from '../../assets/pokebola.png'
//@ts-ignore
import pokeBolaSemFundo from '../../assets/pokeBolaSemFundo.png'
// vector
import { getTypeImageByType } from '../../assets/vector/getTypesPokemonImg'

const Home = () => {
  const { pokemons, isLoading } = useContext(PokemonContext)
  const { addToPokemon, pokemonCart,searchByNamePokemon } = useContext(PokemonCardContext)


  if (isLoading) {
    return <p>Carregando os dados da sua Pokedex...</p>
  }
  
  console.log(pokemonCart)
  return (
    <S.CardContainer>
      {pokemons.map((pokemon) => (
        <S.Card
          key={pokemon.name}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
        >
          <div className="imgBx">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt="Pokemon sprites"
            />
          </div>

          <S.pokeImg src={pokeBolaSemFundo} alt="Pokebola Sem fundo" />

          <div className="contentBx">
            <S.TextNamePokemon>{pokemon.name}</S.TextNamePokemon>
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
            <button onClick={() => addToPokemon(pokemon, pokemon.name)}>
              <img className="pokebola" src={pokebola} alt="" />
            </button>
          </div>
        </S.Card>
      ))}
    </S.CardContainer>
  )
}

export default Home
