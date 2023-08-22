import React from 'react'
import '../CardPokemon/CardPokemon.css'
import { getTypeImageByType } from './vector/getTypesPokemonImg'
// import TypeBadge from './TypeBadge'
//@ts-ignore
import pokebola from '../../assets/pokebola.png'
import { PokemonCardContext } from '../../context/PokemonCardContext'
import  { useContext } from 'react';

const CardPokemon = ({
  name,
  image,
  types,
  stats
}: {
  name: string
  image: string
  types: string
  stats: Array<{
    base_stat: number
    effort: number
    stat: { name: string }
  }>
}) => {
  console.log(types)

  const capitalFirstLetter = name
  const newName = capitalFirstLetter.toUpperCase()

  const typeM = types
  const newTypeM = typeM.toUpperCase()

  const { addToPokemon, handleSearchName } = useContext(PokemonCardContext);

  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img src={image} />
            {/* <strong>Hover Me</strong> */}
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>

          <div className="front-content">
            {/* <small className="badge">{stats}</small> */}
            <div className="glow-on-hover">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <span>
                    {stat.stat.name === 'hp'
                      ? 'HP'
                      : stat.stat.name === 'special-attack'
                      ? 'Sp. Atk'
                      : stat.stat.name === 'special-defense'
                      ? 'Sp. Def'
                      : stat.stat.name}{' '}
                    : {stat.base_stat}
                  </span>
                </div>
              ))}
            </div>

            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{newName}</strong>
                </p>
              </div>
           
              <div className="card-footer">
                {types.split(', ').map((type, index) => (
                  <span key={index} className="type">
                    <img src={getTypeImageByType(type)} alt={type} />
                    
                    {newTypeM} 
                   
                    
                   </span> 
                   
                 ))} 
                 
                 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPokemon
