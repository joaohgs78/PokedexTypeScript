import styled from 'styled-components'
//@ts-ignore
import background from '../../assets/background.jpg'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(${background})
  no-repeat center center fixed;
  background-size: cover;
  cursor: pointer;

`
export const PokeFantasmaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; 
`;

export const PokeFantasma = styled.img`
  width: 200px; 
  height: auto; 
  
`
export const PokeFantasma2 = styled.img`
  width: 200px; 
  height: auto; 
`
export const PokeFantasma4 = styled.img`
  width: 200px; 
  height: auto; 
`
export const PokeFantasma5 = styled.img`
  width: 200px; 
  height: auto; 
`

