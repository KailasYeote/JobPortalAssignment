import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../service/userService";

export const registerUser = createAsyncThunk("user/registerUser", async (userData) => {
    const response = await userService.registerUser(userData);
    return response;
})

export const userLogin = createAsyncThunk('userlogin', async (userData) => {
    const response = await userService.loginUser(userData);
    return response;
})


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        savedJobs: [],
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.savedJobs = [];
        },
        toggleSavedJob: (state, action) => {
            const job = action.payload;
            const exists = state.savedJobs.find(j => j._id === job._id);
            if (exists) {
                state.savedJobs = state.savedJobs.filter(j => j._id !== job._id);
            } else {
                state.savedJobs.push(job);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = "succeeded";
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.status = "failed";
        })
        builder.addCase(registerUser.pending, (state, action) => {
            state.status = "pending";
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = "succeeded";
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.status = "failed";
        })
        builder.addCase(userLogin.pending, (state, action) => {
            state.status = "pending";
        })
    }
})

export const { logout, toggleSavedJob } = userSlice.actions;
export default userSlice.reducer;