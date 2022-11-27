import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../util/shared/axios';
import { APIs } from '../util/apiRoutes';

const initialState = {
    users: [],
    error: '',
    loading: true
};

export const login = createAsyncThunk('user/login', async (values) => {
    const response = await axiosInstance.post(`${APIs.login}`, values);
    return response.data;
});

export const register = createAsyncThunk('user/register', async (values) => {
    const response = await axiosInstance.post(`${APIs.register}`, values);
    return response.data;
});

// @ts-ignore
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });

        builder.addCase(register.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        });
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });
    }
});

export default userSlice.reducer;
