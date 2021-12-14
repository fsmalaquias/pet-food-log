import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PetOptions } from '../../utils/Constants';
import { IEffect } from '../store';

// Exemplo redux toolkit
// https://codesandbox.io/s/redux-compare-toolkit-eyff4?file=/src/apps/GithubReduxToolkitSample.tsx:330-336

// Exemplo de persist
// https://medium.com/geekculture/redux-persist-redux-toolkit-implementation-made-easy-for-react-native-and-react-js-831ee1e3f22b

// Pesquisar
// https://www.youtube.com/watch?v=NlqwHsFFxV8
export interface IFoodLogRegistry {
  id: number;
  petOption: PetOptions,
  date: number,
}

export interface IGlobalStoreInterface{
  petOption: PetOptions;
  isFirstOpen: boolean;
  petName: string;
  foodLogRegistry: Array<IFoodLogRegistry>;
}

const lastFoodLogMock: Array<IFoodLogRegistry> = [];

const initialState: IGlobalStoreInterface = {
  petOption: PetOptions.none,
  petName: '',
  isFirstOpen: true,
  foodLogRegistry: lastFoodLogMock,
};

const Global = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setFirstOpen: (state: IGlobalStoreInterface,
      { payload }: PayloadAction<boolean>) => ({
      ...state,
      isFirstOpen: payload,
    }),
    setPetOption: (state: IGlobalStoreInterface,
      { payload }: PayloadAction<PetOptions>) => ({
      ...state,
      petOption: payload,
    }),
    setPetName: (state: IGlobalStoreInterface,
      { payload } : PayloadAction<string>) => ({
      ...state,
      petName: payload,
    }),
    addFoodLogRegistry: (state: IGlobalStoreInterface,
      { payload }: PayloadAction<IFoodLogRegistry>) => ({
      ...state,
      foodLogRegistry: [payload, ...state.foodLogRegistry],
    }),
    removeFoodLogRegistry: (state: IGlobalStoreInterface,
      { payload }: PayloadAction<IFoodLogRegistry>) => ({
      ...state,
      foodLogRegistry: state.foodLogRegistry.filter((item) => item.id !== payload.id),
    }),
  },
});

export const setFirstOpen = (payload: boolean) : IEffect => async (dispatch) => {
  console.log('Global.actions.setFirstOpen', payload);
  dispatch(Global.actions.setFirstOpen(payload));
};

export const setPetOption = (payload: PetOptions) : IEffect => async (dispatch) => {
  console.log('Global.actions.setFirstOpen', payload);
  dispatch(Global.actions.setPetOption(payload));
};

export const addFoodLogRegistry = (payload: IFoodLogRegistry) : IEffect => async (dispatch) => {
  console.log('Global.actions.addFoodLogRegistry', payload);
  dispatch(Global.actions.addFoodLogRegistry(payload));
};

export const removeFoodLogRegistry = (payload: IFoodLogRegistry) : IEffect => async (dispatch) => {
  console.log('Global.actions.removeFoodLogRegistry', payload);
  dispatch(Global.actions.removeFoodLogRegistry(payload));
};



export const setPetName = (payload: string) : IEffect => async (dispatch) => {
  console.log('Global.actions.setPetName', payload);
  dispatch(Global.actions.setPetName(payload));
};

export default Global;
