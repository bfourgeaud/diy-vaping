import { FieldTypes, IState } from "../types/_types";
import { nicotineBooster } from "./globals";

const calculateur = (state:IState) => {

  switch(state.lastChanged as FieldTypes) {
    
    case FieldTypes.liquide :
    case FieldTypes.nicotine :
      state.arome = state.liquide * state.concentration
      state.booster = (state.liquide * state.nicotine) / nicotineBooster
      state.base = state.liquide - (state.booster + state.arome)
      if(state.base<0){
        state.liquide = state.liquide - state.base;
        state.base = 0;
      }
      break

    case FieldTypes.base:
      const coefLiquide =( 1/(1-state.concentration))/(1-(state.nicotine/20)-((state.nicotine*(state.concentration))/(20*(1-state.concentration/100))))
      state.liquide = coefLiquide * state.base
      state.booster = (state.liquide * state.nicotine) / nicotineBooster
      state.arome = state.liquide * state.concentration
      break

    case FieldTypes.arome:
      state.liquide = state.arome / state.concentration
      state.booster = (state.liquide * state.nicotine) / nicotineBooster
      state.base = state.liquide - (state.booster + state.arome)
      break
    default:
  }
  return state;
}

export default calculateur