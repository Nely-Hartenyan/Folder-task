import {combineReducers} from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitSlice";
import storageSession from "redux-persist/es/storage/session";
import {persistReducer} from "redux-persist";


const persistConfig = {
    key: "root",
    storage: storageSession,
    whitelist: ["fileFolder"],

};

const rootReducer = combineReducers({
    fileFolder: toolkitReducer
})

export default persistReducer(persistConfig, rootReducer)