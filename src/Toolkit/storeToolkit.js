import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore} from "redux-persist";
import rootReducer from './reducerToolkit'


export const store = configureStore({
    reducer: rootReducer,
    devTools:true,
    middleware: getDefaultMiddleware({
       serializableCheck: {
       ignoredActions: ["persist/PERSIST"],},
            }),
});

export const persist = persistStore(store);