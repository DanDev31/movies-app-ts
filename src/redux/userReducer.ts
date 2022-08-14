import { createSlice } from "@reduxjs/toolkit";


interface Authorization {
    user:string;
    isLogged:boolean;
}

const initialState:Authorization = {
    user:"",
    isLogged:false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        allowAccess(state, {payload}){
            state.user = payload;
            state.isLogged = true;
        },
        logout(state){
            state.user = "";
            state.isLogged = false;
        }
    }
})

export const { allowAccess, logout } = userSlice.actions
export default userSlice.reducer