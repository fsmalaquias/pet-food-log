import { configureStore, Action, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import Global from './slices/global.slice';

const reducers = combineReducers({
  global: Global.reducer,
});

const store = configureStore({
  reducer: reducers,
});

export type IReduxState = ReturnType<typeof reducers>;
export type IDispatch = typeof store.dispatch;
export type IEffect = ThunkAction<void, IReduxState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<IDispatch>();

export default store;
