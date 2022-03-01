import { ACTION, FieldTypes, IReducerType, IState } from "../types/_types"
import calculateur from "./calculateur"
import { pgvgChoices } from "./globals"

export const initialState = {
  liquide: 100,
  pgvg: pgvgChoices[1].dosage,
  concentration: pgvgChoices[1].dosage * 12 / 100,
  nicotine: 3,
  base: 73,
  booster: 15,
  arome: 12,
  lastChanged: FieldTypes.liquide
}

export const reducer = (state:IState, action:IReducerType):IState => {
  let lastChanged = state.lastChanged
  switch (action.type as ACTION) {
    case ACTION.CHANGE_LIQUIDE:
      const liquide = Math.round(action.value)
      lastChanged = FieldTypes.liquide
      return {...calculateur({...state, liquide, lastChanged})}
    case ACTION.CHANGE_PGVG:
      const pgvg = action.value
      const concentration = action.value * 12 / 100
      return { ...calculateur({...state, pgvg, concentration })}
    case ACTION.CHANGE_NICOTINE:
      const nicotine = action.value
      return { ...calculateur({...state, nicotine}) }
    case ACTION.CHANGE_BASE:
      lastChanged = FieldTypes.base
      const base = Math.round(action.value)
      return { ...calculateur({...state, lastChanged, base}) }
    case ACTION.CHANGE_AROME:
      const arome = Math.round(action.value)
      lastChanged = FieldTypes.arome
      return {...calculateur({...state, arome, lastChanged})}
    default : return state
  }
}