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