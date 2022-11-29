import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../util/shared/axios';
import { APIs } from '../util/apiRoutes';
import { requestQueryParamMaker } from '../util/shared/sharedUtils';

const initialState = {
    users: [],
    error: '',
    message: '',
    loading: true,
    success: false
};

export const login = createAsyncThunk('user/login', async (values) => {
    const response = await axiosInstance.post(`${APIs.login}`, values);
    return response.data;
});

export const register = createAsyncThunk('user/register', async (values) => {
    const response = await axiosInstance.post(`${APIs.register}`, values);
    return response.data;
});

export const getUser = createAsyncThunk('user/getUser', async (values) => {
    const params = requestQueryParamMaker({ params: values });
    const response = await axiosInstance.get(`${APIs.getUser}?${params}`);
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
            console.log(action.payload.result);
            state.loading = false;
            state.users = action?.payload?.result;
            state.message = action?.payload?.message;
            state.error = '';
            state.success = action?.payload?.success;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action?.error?.message;
            state.success = action?.payload?.success;
        });

        builder.addCase(register.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload.result;
            state.message = action.payload.message;
            state.error = '';
            state.success = action?.payload?.success;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action?.error?.message;
            state.success = action?.payload?.success;
        });

        builder.addCase(getUser.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action?.payload?.result;
            state.message = action?.payload?.message;
            state.success = action?.payload?.success;
            state.error = '';
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action?.error?.message;
            state.success = action?.payload?.success;
        });
    }
});

export default userSlice.reducer;
