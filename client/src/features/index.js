import userSlice from './userSlice';
import { login, register } from './userSlice';

export const userReducer = userSlice;
export const loginDispatch = login;
export const registerDispatch = register;
