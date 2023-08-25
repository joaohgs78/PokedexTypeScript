import Header from '../../components/Header/Header';
import React from 'react';
import * as S from '../../pages/Pokebola/styles';
import { PokemonCardContext } from '../../context/PokemonCardContext';
import CardPokemon from '../../components/CardPokemon/CardPokemon';
import { useContext } from 'react';
//@ts-ignore
import pokemonfantasma1 from '../../assets/pokemonfantasma1.png'
//@ts-ignore
import pokemonfantasma2 from '../../assets/pokemonfantasma3.png'
//@ts-ignore
import pokemonfantasma4 from '../../assets/pokemonfantasma4.png'
//@ts-ignore
import pokemonfantasma5 from '../../assets/pokemonfantasma5.png'


const Pokebola = () => {
  const { pokemonCart } = useContext(PokemonCardContext);

  return (
    <div>
      <Header />
      {pokemonCart.length === 0 ? (
         <div>
         <S.PokeFantasmaContainer>
           <S.PokeFantasma src={pokemonfantasma1} alt="" />
           <S.PokeFantasma2 src={pokemonfantasma2} alt="" />
           <S.PokeFantasma4 src={pokemonfantasma4} alt="" />
           <S.PokeFantasma5 src={pokemonfantasma5} alt="" />
         </S.PokeFantasmaContainer>
         
         Você não capturou nenhum Pokémon ainda, só tem fantasmas aqui!
        
       </div>
        

      ) : (
        <S.CardContainer>
          {pokemonCart.map((pokemon) => (
            <CardPokemon
              pokemon={pokemon}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types[0].type.name || 'normal'}
              id={pokemon.id}
            />
          ))}
        </S.CardContainer>
      )}
    </div>
  );
};

export default Pokebola;
