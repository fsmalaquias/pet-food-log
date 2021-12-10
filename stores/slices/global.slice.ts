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
  petImage: string,
  date: string,
}

export interface IGlobalStoreInterface{
  petOption: PetOptions;
  isFirstOpen: boolean;
  foodLogRegistry: Array<IFoodLogRegistry>;
}

const lastFoodLogMock = [
  {
    id: 1,
    petImage: 'dog',
    date: (new Date()).toDateString(),
  },
  {
    id: 2,
    petImage: 'cat',
    date: (new Date()).toDateString(),
  },
];

const initialState: IGlobalStoreInterface = {
  petOption: PetOptions.none,
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
    addFoodLogRegistry: (state: IGlobalStoreInterface,
      { payload }: PayloadAction<IFoodLogRegistry>) => ({
      ...state,
      foodLogRegistry: [...state.foodLogRegistry, payload],
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

export default Global;
