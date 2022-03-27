import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
// import dynamic from 'next/dynamic';
// const authReducer = dynamic(() => import('../features/auth/authSlice'), {
//     ssr: false
// })


export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});