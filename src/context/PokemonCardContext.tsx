import React, { ReactNode, createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export interface PokemonData {
  name: string
  url: string
  id: number
  sprites: {
    front_default: string
    other: {
      dream_world: {
        front_default: string
      }
      home: {
        front_default: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
      url: string
    }
  }>
  moves: Array<{
    move: {
      name: string
      url: string
    }
  }>
  stats: Array<{
    base_stat: number
    effort: number
  }>
}

export interface PokemonCardContextData {
  pokemonCart: PokemonData[]
  addToPokemon: (pokemon: PokemonData) => void
  removePokemon: (id: number) => void
}

export const PokemonCardContext = createContext<PokemonCardContextData>({
  pokemonCart: [],
  addToPokemon: () => {},
  removePokemon: () => {}
})

interface PokemonCardProviderProps {
  children: ReactNode
}

const PokemonCardProvider: React.FC<PokemonCardProviderProps> = ({
  children
}) => {
  const [pokemonCart, setPokemonCart] = useState<PokemonData[]>([])



  // localstorage
  const [initialPokemonLoaded, setInitialPokemonLoaded] = useState(false)

  const addToPokemon = (pokemon: PokemonData) => {
    const checkPokemon = pokemonCart.find((p) => p.id === pokemon.id)

    if (checkPokemon) {
      toast.error('Esse Pokémon já foi capturado!')
      return
    }

    setPokemonCart([...pokemonCart, { ...pokemon }])
    toast.success('Pokemon capturado')
  }

  const removePokemon = (id: number) => {
    const updatedPokemonCart = pokemonCart.filter(
      (pokemonData) => pokemonData.id !== id
    )
    setPokemonCart(updatedPokemonCart)
    toast.success('Pokemon removido')
  }

  //localstorage
  useEffect(() => {
    if (!initialPokemonLoaded) {
      const initialPokemon = localStorage.getItem('pokemonCart');
      if (initialPokemon) {
        setPokemonCart(JSON.parse(initialPokemon));
      }
      setInitialPokemonLoaded(true);
    }
  }, [initialPokemonLoaded]);

  useEffect(() => {
    // Salvar no Local Storage sempre que pokemonCart mudar
    localStorage.setItem('pokemonCart', JSON.stringify(pokemonCart));
  }, [pokemonCart]);

  return (
    <PokemonCardContext.Provider
      value={{ pokemonCart, addToPokemon, removePokemon }}
    >
      {children}
    </PokemonCardContext.Provider>
  )
}

export default PokemonCardProvider
