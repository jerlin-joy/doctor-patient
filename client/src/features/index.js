import userSlice, { login, register, getUser } from './userSlice';

export const loginDispatch = login;
export const registerDispatch = register;
export const getUserDispatch = getUser;
export const userReducer = userSlice;
