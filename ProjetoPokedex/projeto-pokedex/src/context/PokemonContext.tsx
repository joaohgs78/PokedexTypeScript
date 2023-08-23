// libs
import React, { createContext, useState, useEffect, ReactNode } from 'react'
// axios
import axios, { AxiosResponse } from 'axios'
// types
import { Pokemon, PokemonContextType } from '../types/PokemonTypes'

// CRIANDO O CONTEXTO COM UM VALOR
export const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  getPokemons: async () => {},
  isLoading: false
})

const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // ESTADOS POKEMONS
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getPokemons = async () => {
    try {
      const pokemonPoints: Promise<AxiosResponse<Pokemon>>[] = []
      for (let i = 1; i <= 50; i++) {
        pokemonPoints.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
      }

      const response = await axios.all(pokemonPoints)
      const fetchedPokemons = response.map((response) => response.data)

      setPokemons(fetchedPokemons)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemons()
  }, [])

  console.log(pokemons)

  return (
    <PokemonContext.Provider value={{ pokemons, getPokemons, isLoading }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
