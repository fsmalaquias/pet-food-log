// Referência que me ajudou com o redux persist
import {
  configureStore,
  applyMiddleware,
  createStore,
  Action,
  combineReducers, createSerializableStateInvariantMiddleware, isPlain,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useDispatch } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import Global from './slices/global.slice';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const reducers = combineReducers({
  global: Global.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composedEnhancer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [serializableMiddleware],
// });

export const persistor = persistStore(store);

export type IReduxState = ReturnType<typeof reducers>;
export type IDispatch = typeof store.dispatch;
export type IEffect = ThunkAction<void, IReduxState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<IDispatch>();

export default store;
