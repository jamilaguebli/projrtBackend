import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/AuthSlice";
import medecinReducer from "./slice/MedecinSlice"

export const store=configureStore({
    reducer:{
        auth:authReducer,
        medecinReducer: medecinReducer
    }
})