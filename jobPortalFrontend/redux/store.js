import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import jobReducer from './jobSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer,
    },
});
