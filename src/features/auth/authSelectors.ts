import {RootState} from '@app/store';
import {AuthState} from './authTypes';

export const selectAuth = (state: RootState): AuthState => state.auth;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;
