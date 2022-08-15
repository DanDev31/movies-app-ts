import { createSlice } from "@reduxjs/toolkit";


interface Authorization {
    user:string;
    isLogged:boolean;
    isModalOpen:boolean;
}

const initialState:Authorization = {
    user:"",
    isLogged:false,
    isModalOpen:false
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
        },
        handleModal(state){
            state.isModalOpen = !state.isModalOpen;
        }
    }
})

export const { allowAccess, logout, handleModal } = userSlice.actions
export default userSlice.reducer