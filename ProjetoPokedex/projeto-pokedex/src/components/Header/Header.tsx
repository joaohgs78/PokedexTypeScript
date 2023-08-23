// Styles

import * as S from './styles'
// Libs

import { BsSearch } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import { useContext } from 'react'
//@ts-ignore

import logo from '../../assets/logo.png'

// Context
import { PokemonCardContext } from '../../context/PokemonCardContext'

const Header = () => {
 
  return (
    <>
      <S.Container>
        <S.LogoContainer>
          <S.LogoImg src={logo} />
        </S.LogoContainer>
        <S.NavContainer>
          <S.SearchContainer>
            <S.SearchPlaceHolder>
              <BsSearch size={20} />
            </S.SearchPlaceHolder>

            <S.inputSearch type="text" placeholder="Pesquisar..." />

            <S.iconDeleteSearch>
              <GrFormClose />
            </S.iconDeleteSearch>
          </S.SearchContainer>

          <S.AvatarContainer>
            <S.AvatarIcon>x</S.AvatarIcon>
            <S.BagPokemon>P</S.BagPokemon>
          </S.AvatarContainer>
        </S.NavContainer>
      </S.Container>
    </>
  )
}

export default Header
