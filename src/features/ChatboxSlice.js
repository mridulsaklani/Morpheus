import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    usermail:{
        email:""
    }
}

const chatbox = createSlice({
    name: "usermail",
    initialState,
    reducers:{
        maildata:(state,action)=>{
      
        }
    }
})