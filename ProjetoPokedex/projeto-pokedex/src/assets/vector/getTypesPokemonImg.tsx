//@ts-ignore
import bug from './Pokemon_Type_Icon_Bug.png';
//@ts-ignore
import dark from './Pokemon_Type_Icon_Dark.png';
//@ts-ignore
import dragon from './Pokemon_Type_Icon_Dragon.png';
//@ts-ignore
import eletric from './Pokemon_Type_Icon_Electric.png';
//@ts-ignore
import fair from './Pokemon_Type_Icon_Fairy.png';
//@ts-ignore
import fight from './Pokemon_Type_Icon_Fighting.png';
//@ts-ignore
import fire from './Pokemon_Type_Icon_Fire.png';
//@ts-ignore
import flying from './Pokemon_Type_Icon_Flying.png';
//@ts-ignore
import ghost from './Pokemon_Type_Icon_Ghost.png';
//@ts-ignore
import grass from './Pokemon_Type_Icon_Grass.png';
//@ts-ignore
import ground from './Pokemon_Type_Icon_Ground.png';
//@ts-ignore
import ice from './Pokemon_Type_Icon_Ice.png';
//@ts-ignore
import normal from './Pokemon_Type_Icon_Normal.png';
//@ts-ignore
import poison from './Pokemon_Type_Icon_Poison.png';
//@ts-ignore
import physic from './Pokemon_Type_Icon_Psychic.png';
//@ts-ignore
import rock from './Pokemon_Type_Icon_Rock.png';
//@ts-ignore
import stell from './Pokemon_Type_Icon_Steel.png';
//@ts-ignore
import water from './Pokemon_Type_Icon_Water.png';

const getTypeImage = (type: string) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return eletric;
    case "fairy":
      return fair;
    case "fighting":
      return fight;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return physic;
    case "rock":
      return rock;
    case "steel":
      return stell;
    case "water":
      return water;
    default:
      return null; 
  }
};

export const getTypeImageByType = (type:string) => {
  const typeImage = getTypeImage(type);
  return typeImage || 'default-image.png'; 
};

