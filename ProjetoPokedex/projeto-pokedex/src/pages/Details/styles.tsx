import styled from 'styled-components'


interface CardProps {
  name: string
  type: string
 
}

const getBackgroundColorByType = (type: string) => {
  switch (type) {
    case 'bug':
      return '#76A866'
    case 'dark':
      return '#704139'
    case 'dragon':
      return '#7038F8'
    case 'electric':
      return '#F8D030'
    case 'fairy':
      return '#EE99AC'
    case 'fighting':
      return '#C03028'
    case 'fire':
      return '#F08030'
    case 'flying':
      return '#A890F0'
    case 'ghost':
      return '#705898'
    case 'grass':
      return '#78C850'
    case 'ground':
      return '#E0C068'
    case 'ice':
      return '#98D8D8'
    case 'normal':
      return '#A8A878'
    case 'poison':
      return '#A040A0'
    case 'psychic':
      return '#F85888'
    case 'rock':
      return '#B8A038'
    case 'steel':
      return '#B8B8D0'
    case 'water':
      return '#6890F0'
    default:
      return 'transparent'
  }
}





