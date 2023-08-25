import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../../context/PokemonContext'
import { PokemonData } from 'context/PokemonCardContext'
import Header from '../../components/Header/Header'
//@ts-ignore
import asgIcon from '../../assets/iconAshGif.gif'

const PokemonDetails = () => {
  const { name } = useParams()

  const { pokemons } = useContext(PokemonContext)

  const pokemon = pokemons.find(
    (pokemon: Pokemon) => pokemon.name === name?.toLowerCase()
  )

  if (pokemon) {
    let Total =
      pokemon.stats[0].base_stat +
      pokemon.stats[1].base_stat +
      pokemon.stats[2].base_stat +
      pokemon.stats[3].base_stat +
      pokemon.stats[4].base_stat +
      pokemon.stats[5].base_stat

    //@ts-ignore
    function getStatusClass(value: number): string {
      if (value >= 100) {
        return 'progress-red'
      } else if (value >= 50) {
        return 'progress-yellow'
      } else {
        return 'progress-green'
      }
    }

    let color
    switch (pokemon.types[0].type.name) {
      case 'grass':
        color = '#729F92'
        break
      case 'fire':
        color = '#EAAB7D'
        break
      case 'water':
        color = '#71C3FF'
        break
      case 'bug':
        color = '#76A866'
        break
      case 'normal':
        color = '#BF9762'
        break
      default:
        color = 'transparent'
    }

    return (
      <>
        <Header />

        <div className="w-full min-h-screen bg-gray-200 p-3 sm:p-6 md:p-12">
          <main className="w-full lg:w-3/4 mx-auto flex flex-wrap ">
            <div className="w-full sm:w-1/2 md:w-1/3 p-1">
              {/*CARD CONTENDO IMG E MOVES 1 CARD VERTICAL**/}
              <div
                id="card1"
                className=" bg-gray-100 shadow-lg rounded overflow-hidden bg-cover bg-center "
                style={{
                  backgroundColor: color
                }}
              >
                <div>
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt="Placeholder"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-4xl text-center capitalize text-white font-bold">
                    {pokemon.name}
                  </h3>
                  <h2 className="mt-3 text-2xl font-bold">Moves:</h2>
                  <div className="flex gap-2 ">
                    <p className="my-1 capitalize font-bold">
                      {pokemon.moves[0].move.name}
                    </p>
                    <p className="my-1 capitalize font-bold">
                      {' '}
                      {pokemon.moves[1].move.name}
                    </p>
                    <p className="my-1 capitalize font-bold">
                      {' '}
                      {pokemon.moves[2].move.name}
                    </p>
                    <p className="my-1 capitalize font-bold">
                      {' '}
                      {pokemon.moves[3].move.name}
                    </p>
                  </div>

                  {(pokemon.types).map((typeInfo: string) => {
                    return (
                      <div className="text-center font-normal text-lg capitalize flex">{typeInfo.name}</div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* <!-- Inner grid --> */}
            <div className="w-full sm:w-1/2 md:w-2/3 flex flex-wrap content-start">
              <div className="w-full p-2">
                {/* <!-- Horizontal responsive card --> */}
                <div
                  id="card2"
                  className="bg-gray-100 shadow-lg rounded overflow-hidden flex flex-wrap"
                  style={{
                    backgroundColor: color
                  }}
                >
                  <div className="w-full md:w-2/3">
                    <div className="p-6">
                      <h4 className="text-2xl font-bold">Base Stats</h4>
                      <div className="my-4 text-center">
                        <span>
                          HP: <strong> {pokemon.stats[5].base_stat}</strong>
                          <progress
                            className={getStatusClass(
                              pokemon.stats[0].base_stat
                            )}
                            value={pokemon.stats[0].base_stat}
                            max="100"
                          />
                        </span>
                        <hr className="mb-4" />
                        <span>
                          Attack: <strong> {pokemon.stats[1].base_stat}</strong>
                          <progress
                            className={getStatusClass(
                              pokemon.stats[1].base_stat
                            )}
                            value={pokemon.stats[1].base_stat}
                            max="100"
                          />
                        </span>
                        <hr className="mb-4" />
                        <span>
                          Defense:{' '}
                          <strong> {pokemon.stats[2].base_stat}</strong>
                          <progress
                            className={getStatusClass(
                              pokemon.stats[2].base_stat
                            )}
                            value={pokemon.stats[2].base_stat}
                            max="100"
                          />
                        </span>
                        <hr className="mb-4" />
                        <span>
                          Sp.Atk: <strong> {pokemon.stats[3].base_stat}</strong>
                          <progress
                            className={getStatusClass(
                              pokemon.stats[3].base_stat
                            )}
                            value={pokemon.stats[3].base_stat}
                            max="100"
                          />
                        </span>
                        <hr className="mb-4" />
                        <span>
                          Sp.Def: <strong> {pokemon.stats[4].base_stat}</strong>
                          <progress
                            className={getStatusClass(
                              pokemon.stats[4].base_stat
                            )}
                            value={pokemon.stats[4].base_stat}
                            max="100"
                          />
                        </span>
                        <hr className="mb-4" />
                        <span>
                          <span>Speed</span>
                          <strong> {pokemon.stats[5].base_stat}</strong>
                          <progress
                            className={getStatusClass(
                              pokemon.stats[5].base_stat
                            )}
                            value={pokemon.stats[5].base_stat}
                            max="100"
                          />
                        </span>
                        <hr className="mb-4" />
                        <span className="text-3xl text-black">
                          Total: {Total}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-1">
                {/** 3-Card Horizontal */}
                <div
                  id="card-3"
                  className="bg-gray-100 shadow-lg rounded overflow-hidden flex flex-wrap flex-col"
                >
                  <header
                    className="p-3 flex items-center"
                    style={{
                      backgroundColor: color
                    }}
                  >
                    <img
                      src={asgIcon}
                      alt="Ash Icon"
                      className="w-12 rounded-full"
                    />

                    <div>
                      <p className="w-full text-gray-800">
                        <strong>Ash</strong>{' '}
                        <small className="text-light text-gray-600">
                          {' '}
                          26 minutes ago
                        </small>
                      </p>
                      <p className="w-full text-gray-600 text-xs">
                        Vamos Capturar esse pokemon
                      </p>
                    </div>
                  </header>

                  <div
                    className="px-3"
                    style={{
                      backgroundColor: color
                    }}
                  >
                    <span className="font-semibold text-gray-600 text-sm">
                      Tags:
                    </span>
                    <ul className="inline-block list-none text-sm text-white font-semibold">
                      <li className="inline-block bg-blue-500 px-2 rounded-full">
                        #Pokemon
                      </li>
                      <li className="inline-block bg-black px-2 rounded-full">
                        #BatalhaPokemon
                      </li>
                      <li className="inline-block bg-pink-500 px-2 rounded-full">
                        #SerMestrePokemon
                      </li>
                    </ul>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{
                      backgroundColor: color
                    }}
                  >
                    <div className="p-3 text-xl w-64">
                      <img
                        src={pokemon.sprites.front_default}
                        alt="Placeholder"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-3 text-xl w-64 ">
                      <img
                        src={pokemon.sprites.back_default}
                        alt="Placeholder"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    )
  } else {
    // Exibir uma mensagem de erro caso o Pokémon não seja encontrado
    return (
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">
            Pokemon ainda não foi capturado em nosso sistema!
          </h1>
        </div>
      </section>
    )
  }
}

export default PokemonDetails
