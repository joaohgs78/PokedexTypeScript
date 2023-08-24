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





export const Card = styled.div<CardProps>`
  position: relative;
  width: 320px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 5rem;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => getBackgroundColorByType(props.type)};
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    content: '${(props) => props.name}';
    position: absolute;
    top: 75%;
    left: 8%;
    font-size: 3em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 25, 0.05);
  }

  .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 150px;
    transition: 0.5s;
  }

  &:hover .imgBx {
    top: 0%;
    transform: translateY(0%);
  }

  .imgBx img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 270px;
    height: 170px;
  }

  .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
  }

  &:hover .contentBx {
    height: 210px;
  }

  .size,
  .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    padding-top: 0;
    padding-bottom: 0;
  }

  &:hover .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }

  &:hover .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }

  .pokebola {
    display: inline-block;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    width: 28%;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
    margin-top: 0;
    cursor: pointer;
  }

  &:hover .pokebola {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
  }
`

export const pokeImg = styled.img`
  position: absolute;
  transform: rotateY('360deg');
  left: -6%;
`
export const pokeTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50px;
  margin: 0 auto;
  gap: 15px;
`
export const pokeTypesImg = styled.img`
  width: 30%;
  height: auto;
`
export const CardTypesImg = styled.img`
  width: 30px;
  height: auto;
`

export const TextNamePokemon = styled.h2`
  position: relative;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: rem;
  background: url(https://i.ibb.co/6bs27mS/Pokemon-Wallpaper-4-K-Desktop.jpg)
    no-repeat scroll;
  background-size: cover;
  -webkit-background-clip: text;
  color: transparent;
`
