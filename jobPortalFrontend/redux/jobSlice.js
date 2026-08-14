import jobService from "../service/jobService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const saveJobs = createAsyncThunk("/saveJobs", async (data, thunkApi) => {
    try {
        const response = await jobService.saveJobs(data)
        return response
    } catch (error) {
        return thunkApi.rejectWithValue("Internal server error", error.response.data.message)
    }

})

export const getAllJobs = createAsyncThunk("/getAllJobs", async (data, thunkApi) => {
    try {
        const response = await jobService.getAllJobs(data)
        return response
    } catch (error) {
        return thunkApi.rejectWithValue("Internal server error", error.response.data.message)
    }

})

export const submitApplication = createAsyncThunk("/submitApplication", async (data, thunkApi) => {
    try {
        const response = await jobService.applyForJob(data)
        return response
    } catch (error) {
        return thunkApi.rejectWithValue("Internal server error", error.response?.data?.message || error.message)
    }
})

const jobSlice = createSlice({
    name: "job",
    initialState: {
        job: null,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(saveJobs.fulfilled, (state, action) => {
            state.job = action.payload
            state.status = "succeeded"
        })
        builder.addCase(saveJobs.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.payload
        })
        builder.addCase(saveJobs.pending, (state, action) => {
            state.status = "loading"
        })
        builder.addCase(getAllJobs.fulfilled, (state, action) => {
            state.job = action.payload
            state.status = "succeeded"
        })
        builder.addCase(getAllJobs.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.payload
        })
        builder.addCase(getAllJobs.pending, (state, action) => {
            state.status = "loading"
        })
    }
})

export default jobSlice.reducer