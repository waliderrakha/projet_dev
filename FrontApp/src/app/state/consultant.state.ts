export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export enum ConsultantActionsTypes {
  GET_ALL_CONSULTANT = "[CONSULTANT] GET All consultant",
  GET_INTERNE_CONSULTANT = "[CONSULTANT] GET Interne consultant",
  GET_EXTERNE_CONSULTANT = "[CONSULTANT] GET Externe consultant",
  SEARCH_CONSULTANT = "[CONSULTANT] Search consultant",
  NEW_CONSULTANT = "[CONSULTANT] New consultant",
  DELETE_CONSULTANT = "[CONSULTANT] Delete consultant",
  EDIT_CONSULTANT = "[CONSULTANT] Edit consultant",
  DETAIL_CONSULTANT = "[CONSULTANT] Detail consultant",

}

export interface ActionEvent {
  type: ConsultantActionsTypes,
  payload?: any
}

export interface AppDataState<T> {
  dataState: DataStateEnum,
  data?: T,
  errorMessage?: string
}
