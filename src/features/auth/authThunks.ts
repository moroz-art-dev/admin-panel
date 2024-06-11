import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  User,
  LoginCredentials,
  RegisterCredentials,
} from '@features/auth/authTypes';
import {sendRequest} from '@api/userAuthService';

export const register = createAsyncThunk<
  User,
  RegisterCredentials,
  {rejectValue: string}
>('auth/register', async (credentials, {rejectWithValue}) => {
  try {
    return await sendRequest('/register', 'POST', credentials);
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
    return await sendRequest('/login', 'POST', credentials);
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
    await sendRequest('/forgot-password', 'POST', {email});
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
