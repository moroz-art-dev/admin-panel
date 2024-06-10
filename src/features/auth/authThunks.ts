import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, LoginCredentials, RegisterCredentials} from './authTypes';
import authService from '@api/userAuthService';

export const register = createAsyncThunk<
  User,
  RegisterCredentials,
  {rejectValue: string}
>('auth/register', async (credentials, {rejectWithValue}) => {
  try {
    return await authService.register(credentials);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk<
  User,
  LoginCredentials,
  {rejectValue: string}
>('auth/login', async (credentials, {rejectWithValue}) => {
  try {
    return await authService.login(credentials);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const forgotPassword = createAsyncThunk<
  void,
  string,
  {rejectValue: string}
>('auth/forgotPassword', async (email, {rejectWithValue}) => {
  try {
    await authService.forgotPassword(email);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
