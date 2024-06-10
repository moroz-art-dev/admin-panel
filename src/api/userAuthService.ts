import {
  User,
  LoginCredentials,
  RegisterCredentials,
} from '@features/auth/authTypes';

const API_URL = 'http://localhost:3000/api/auth';

const register = async (credentials: RegisterCredentials): Promise<User> => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration failed');
  }

  const data = await response.json();
  return data;
};

const login = async (credentials: LoginCredentials): Promise<User> => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  const data = await response.json();
  return data;
};

const forgotPassword = async (email: string): Promise<void> => {
  const response = await fetch(`${API_URL}/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email}),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Password reset failed');
  }
};

export default {register, login, forgotPassword};
