import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./reducer/carSlice";

export const store=configureStore({
    reducer:{
        carList:carReducer
    }
})