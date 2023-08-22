import React from 'react'
import * as S from './style'
import { BsSearch } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import logo from '../../img/logo1.png'
import  { useContext, useState } from 'react';
import { PokemonCardContext } from '../../context/PokemonCardContext'

const Header = () => {
  const { addToPokemon } = useContext(PokemonCardContext);
  return (
    <>
      <S.Container>
        <S.LogoContainer>
          <S.LogoImg src={logo}></S.LogoImg>
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
