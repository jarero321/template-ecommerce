import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { userSlice } from './states/user';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const reducers = combineReducers({
  user: userSlice.reducer,
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: { persistReducers },
  middleware: [thunk],
});

export interface AppStore {
  persistReducers: {
    user: any;
  };
}
export const persistor = persistStore(store);
