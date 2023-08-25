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
  justify-content: center;
  align-items: center;
  gap: 20px; 
 padding-top: 100px;
 
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

export const DivContainer = styled.div`
  
  justify-content: center;
  align-items: center;
  text-align:center;
  
  p{margin-top:30px}
  /* background: #5D5D5D; */
  background: linear-gradient(#5D5D5D, #430157);
  height: 100vh;
  p{color:white}
  

`

