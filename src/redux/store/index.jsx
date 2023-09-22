import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import rootReducers from '../slices/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whiteList: ['auth'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
