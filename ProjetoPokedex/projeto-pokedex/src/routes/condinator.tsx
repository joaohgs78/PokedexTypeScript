export const goToHome = (navigate: (path: string) => void) => {
    navigate('/');
  };
  
  export const goToPokebola = (navigate: (path: string) => void) => {
    navigate('/pokebola');
  };
  
  export const goToPokemonDetailPage = (navigate: (path: string) => void, name: string, types: string) => {
    navigate(`/detail/${name}/${types}`);
  };