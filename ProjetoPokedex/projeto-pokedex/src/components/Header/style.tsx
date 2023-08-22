import tw from 'tailwind-styled-components'

export const Container = tw.div`
  
  sm:flex
  items-stretch
  justify-between
  grow
 
  py-5
  px-10
  shadow-md
  mb-5
`

export const LogoContainer = tw.div`
 
   flex
   flex-col
   flex-wrap
   justify-center
   mb-5
   mr-3

`
export const LogoImg = tw.img `
 
  flex
  flex-col
  justify-center
  w-24
 

`
export const NavContainer = tw.div `
 
 flex
 items-center
 lg:shrink-0
 lg:flex-nowrap
 


 
`

export const SearchContainer = tw.div `

 relative
 flex
 items-center
 lg:ml-4
 sm:mr-2

`



export const SearchPlaceHolder = tw.span `

 absolute
 ml-4 
 leading-none
 -translate-y-1/2
 top-1/2

`

export const inputSearch = tw.input `

 block
 w-full
 min-w-[70px]
 py-3 
 pl-12 
 line-normal
 bg-white
 border
 border-solid
 outline-none
 apperance-none
 text-stone-400
 border-stone-200
 bg-clip-padding
 rounded-2xl

`


export const iconDeleteSearch = tw.span `
  
  absolute
  right-0
  left-auto
  mr-4
  leading-none
  -translate-y-1/2
  peer-placeholder-shown:hidden
  top-1/2
  hover:text-primary
  text-muted


`


export const AvatarContainer = tw.div `
 
 relative
 flex
 items-center
 ml-2
 lg:ml-4


`

export const AvatarIcon = tw.div `

 flex 
 items-center
 justify-center
 w-14
 h-14
 leading-normal
 align-middle
 transition-colors
 duration-150
 ease-in-out
 bg-transparent
 border
 border-solid
 shadow-none
 cursor
 rounded-2xl
 border-stone-200
 

`


export const BagPokemon = tw.div `

 flex 
 items-center
 justify-center
 w-14
 h-14
 leading-normal
 align-middle
 transition-colors
 duration-150
 ease-in-out
 bg-transparent
 border
 border-solid
 shadow-none
 cursor
 rounded-2xl
 border-stone-200
 ml-3
 `