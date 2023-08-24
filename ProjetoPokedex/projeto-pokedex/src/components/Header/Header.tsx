import {useNavigate} from 'react-router-dom'
import {goToPokebola} from '../../routes/condinator'
import {goToHome} from '../../routes/condinator'
import * as S from './styles'
// Libs
import { BsSearch } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
//@ts-ignore
import logo from '../../assets/logo1.png'
//@ts-ignore
import pokebola from '../../assets/pokebola.png'

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <S.Container>
        <S.LogoContainer >
          <S.LogoImg  src={logo} onClick={() => goToHome(navigate)}/>
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
            
            <S.BagPokemon  >
              <S.LogoPokebolaCap onClick={() => goToPokebola(navigate)} src={pokebola}/>
            </S.BagPokemon>
          </S.AvatarContainer>
        </S.NavContainer>
      </S.Container>
    </>
  )
}

export default Header
