import { configureStore } from "@reduxjs/toolkit";
import catagorySlice from "./slices/catagorySlice";
import { data } from "autoprefixer";

const store = configureStore({
    reducer : {
         data : catagorySlice,
    }
})

export default store