import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    goals: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}
export const goalSlice = createSlice({
    name: "goal",
    initialState,
    reducers: {
        reset,
    },
    extraReducers:{
        reset,
    }
})