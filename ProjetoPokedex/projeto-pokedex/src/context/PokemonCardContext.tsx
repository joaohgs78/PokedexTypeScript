import React, {createContext, useState,useEffect, ReactNode,} from 'react'
import { toast } from 'react-toastify';
import PokemonContext from './PokemonContext'






interface PokemonData {
    id: number
    name: string
    amount: number
    types:string
}

interface Pokemon {
  name:string,
  url:string
}

interface PokemonCardContextData {
  pokemonCart: PokemonData[]
  pokemonAmount:number
  
  addToPokemon:(pokemon: Pokemon, name:string) => void
  removePokemon:(id:number) => void
  removeAllClearPokemon:() => void
  handleSearchName:(name: string) => void
}


//CRIAR UMA VARIVEL PARA STARTAR NOSSO CONTEXTO 
export const PokemonCardContext = createContext<PokemonCardContextData> (
    {} as PokemonCardContextData
)

interface PokemonCardProviderProps {
    children: ReactNode
}

    export const PokemonCardProvider: React.FC<PokemonCardProviderProps> = ({children}) => {
    
        const [pokemonCart , setPokemonCart] = useState<PokemonData[]>([])
        const [name,setName] = useState<string>("")
        const [pokemonAmount, setPokemonAmout] = useState<number>(0)
        const [searchPokemon, setSearchPokemon] = useState<string>('')



        // const handleSearchName = (name:string) => {
            
        //     const searchPokemonName = pokemonCart.find((pokemon) => (
        //         pokemon.name.toLowerCase().includes
        //     ));
        
            
        //     return handleSearchName(searchPokemon)
        //   }

          const handleSearchName = (searchName: string) => {
            const searchResults = pokemonCart.filter((pokemon) => pokemon.name.toLowerCase().includes(searchName.toLowerCase()));
            // Aqui você pode fazer algo com os resultados da busca, como atualizar um estado ou exibir uma lista.
            
          };

    
 
        useEffect(() => {

         if(pokemonCart) {
            const amount = pokemonCart.reduce(
            (acumulator, currentItem) => acumulator + 1 ,0)

            setPokemonAmout(amount)
         }

    
        },[pokemonCart])



        const addToPokemon = (pokemon: PokemonData, name:string) => {
        
        const checkPokemon = pokemonCart.find((pokemon) => pokemon.name === name)
        //pokemoncart.filter((item) => item.id !== id)
        
          if(checkPokemon) {
            toast.error('Esse pokemon já foi capturado !')
            return;
          }

          setPokemonCart([...pokemonCart, {...pokemon, name, amount: 1}])

        }

    
         
      const removePokemon = (id:number) => {
        const pokemon = pokemonCart.filter((pokemon) => pokemon.id !== id)
        setPokemonCart(pokemon)  
      }


      const removeAllClearPokemon = () => {
        setPokemonCart([])
      }


      return (
        <PokemonCardContext.Provider
      value={{
        pokemonCart,
        pokemonAmount,
        addToPokemon,
        removePokemon,
        removeAllClearPokemon,
        handleSearchName,
      }}
    >
      {children}
    </PokemonCardContext.Provider>

      )
   
    
    
    
    
    
    


}

export default PokemonCardProvider