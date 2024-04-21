import {configureStore} from '@reduxjs/toolkit';
import {homeReducer} from '../screens/Home/home.slice';
import {homeApi} from '../screens/Home/home.api';

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    home: homeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([homeApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
