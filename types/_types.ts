export interface IState {
  liquide: number,
  pgvg: number,
  concentration: number,
  nicotine: number,
  base: number,
  booster: number,
  arome: number,
  lastChanged: FieldTypes
}

export interface IReducerType {
  type: ACTION,
  value: number
}

export enum FieldTypes  {
  'liquide',
  'nicotine',
  'base',
  'arome',
  'booster'
}

export enum ACTION {
  CHANGE_PGVG,
  CHANGE_NICOTINE,
  CHANGE_BASE,
  CHANGE_BOOSTER,
  CHANGE_AROME,
  CHANGE_LIQUIDE
}