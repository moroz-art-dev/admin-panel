import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import authService from '@api/userAuthService';
import {
  User,
  LoginCredentials,
  RegisterCredentials,
  AuthState,
} from './authTypes';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// Register user
export const register = createAsyncThunk<
  User,
  RegisterCredentials,
  {rejectValue: string}
>('auth/register', async (user, {rejectWithValue}) => {
  try {
    return await authService.register(user);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

// Login user
export const login = createAsyncThunk<
  User,
  LoginCredentials,
  {rejectValue: string}
>('auth/login', async (user, {rejectWithValue}) => {
  try {
    return await authService.login(user);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

// Forgot password
export const forgotPassword = createAsyncThunk<
  void,
  string,
  {rejectValue: string}
>('auth/forgotPassword', async (email, {rejectWithValue}) => {
  try {
    return await authService.forgotPassword(email);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(
        register.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Registration failed';
        }
      )
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(
        login.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Login failed';
        }
      )
      .addCase(forgotPassword.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.loading = false;
      })
      .addCase(
        forgotPassword.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Password reset failed';
        }
      );
  },
});

export default authSlice.reducer;
