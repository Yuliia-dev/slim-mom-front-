import { combineReducers } from '@reduxjs/toolkit';
import { loaderSlice } from './app/loader/loaderSlice';
import { authSlice } from './app/auth';
import { productsSlice } from './app/products/productsSlice';
import { usersSlice } from './app/users/users-slice';
import { dateSlice } from './app/date/dateSlice';


export const rootReducer = combineReducers({
  loader: loaderSlice.reducer,
  auth: authSlice.reducer,
  products: productsSlice.reducer,
  users: usersSlice.reducer,
  selectedDate: dateSlice.reducer,
});
