import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Cookie from "js-cookie"
// import cookieCutter from "cookie-cutter"
//Get user from local storage
// const user = JSON.parse(localStorage.getItem("user"));
Cookie.set('user', 'some-value')



const user = Cookie.get('user')
const initialState = {
    user: user ? user : null,
    // user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: null,
}

//Register 


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = null;
        },
    },
    extraReducers: {
        //Login
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;