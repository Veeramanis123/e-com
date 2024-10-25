

import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './slices/apiSlice';

import cardReducer from "./slices/cardSlice"



export const store =  configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    card :cardReducer

   },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

})

export default store;