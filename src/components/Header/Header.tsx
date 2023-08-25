import { Link } from 'react-router-dom'

import * as S from './styles'
// Libs
import { BsSearch } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
//@ts-ignore
import logo from '../../assets/logo1.png'
//@ts-ignore
import pokebola from '../../assets/pokebola.png'

const Header = () => {

  // se o array da pokemoncart estiver vazios não vai para pokebola ->
  // ou aparece uma mensagem dizendo sua pokebola esta vazia 
  // pesquise tostify para mensagem personalizadas
  return (
    <>
      <S.Container>
        <S.LogoContainer>
          <Link to={'/'}>
            <S.LogoImg src={logo} />
          </Link>
        </S.LogoContainer>
        <S.NavContainer>
          {/* <S.SearchContainer>
            <S.SearchPlaceHolder>
              <BsSearch size={20} />
            </S.SearchPlaceHolder>

            <S.inputSearch type="text" placeholder="Pesquisar..." />

            <S.iconDeleteSearch>
              <GrFormClose />
            </S.iconDeleteSearch>
          </S.SearchContainer> */}

          <S.AvatarContainer>
            <S.BagPokemon>
              <Link to={"/pokebola"}>
              <S.LogoPokebolaCap src={pokebola} />
              </Link>
              
            </S.BagPokemon>
          </S.AvatarContainer>
        </S.NavContainer>
      </S.Container>
    </>
  )
}

export default Header
