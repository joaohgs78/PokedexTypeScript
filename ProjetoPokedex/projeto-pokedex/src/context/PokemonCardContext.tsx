// libs
import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { toast } from 'react-toastify'
// types
import {PokemonData,Pokemon,PokemonCardContextData} from '../types/PokemonCardTypes'


export const PokemonCardContext = createContext<PokemonCardContextData>(
  {} as PokemonCardContextData
)

interface PokemonCardProviderProps {
  children: ReactNode
}

const PokemonCardProvider: React.FC<PokemonCardProviderProps> = ({
  children
}) => {
  const [pokemonCart, setPokemonCart] = useState<PokemonData[]>([])
  const [pokemonAmount, setPokemonAmout] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const pokemonsPerPage = 10

  const getCurrentPokemons = () => {
    const indexLastPokemon = currentPage * pokemonsPerPage
    const indexFirstPokemon = indexLastPokemon - pokemonsPerPage

    return pokemonCart.slice(indexFirstPokemon, indexLastPokemon)
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  useEffect(() => {
    if (pokemonCart) {
      const amount = pokemonCart.reduce(
        (accumulator, currentItem) => accumulator + 1,
        0
      )

      setPokemonAmout(amount)
    }
  }, [pokemonCart])

  const addToPokemon = (pokemon: Pokemon, name: string) => {
    const checkPokemon = pokemonCart.find(
      (pokemonData) => pokemonData.name === name
    )

    if (checkPokemon) {
      toast.error('Esse pokemon já foi capturado !')
      return
    }

    setPokemonCart([...pokemonCart, { name, amount: 1, id: -1 }])
  }

  const removePokemon = (id: number) => {
    const updatedPokemonCart = pokemonCart.filter(
      (pokemonData) => pokemonData.id !== id
    )
    setPokemonCart(updatedPokemonCart)
  }

  const removeAllClearPokemon = () => {
    setPokemonCart([])
  }

  const searchByNamePokemon = (name: string) => {
    const pokemonName = pokemonCart.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    )
    setPokemonCart(pokemonName)
  }

  return (
    <PokemonCardContext.Provider
      value={{
        pokemonCart,
        pokemonAmount,
        searchByNamePokemon,
        addToPokemon,
        removePokemon,
        removeAllClearPokemon,
        pokemonsPerPage,
        getCurrentPokemons,
        nextPage,
        prevPage
      }}
    >
      {children}
    </PokemonCardContext.Provider>
  )
}

export default PokemonCardProvider
