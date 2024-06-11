const API_URL = 'http://localhost:3000/api/auth';

const handleResponse = async (response: Response): Promise<any> => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Request failed');
  }

  return response.json();
};

const sendRequest = async (
  endpoint: string,
  method: string,
  body?: any
): Promise<any> => {
  const url = `${API_URL}${endpoint}`;

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, options);
  return handleResponse(response);
};

export {sendRequest};

// export const register = async (
//   credentials: RegisterCredentials
// ): Promise<User> => {
//   const data = await sendRequest(`${API_URL}/register`, 'POST', credentials);
//   return data;
// };

// export const login = async (credentials: LoginCredentials): Promise<User> => {
//   const data = await sendRequest(`${API_URL}/login`, 'POST', credentials);
//   return data;
// };

// export const forgotPassword = async (email: string): Promise<void> => {
//   await sendRequest(`${API_URL}/forgot-password`, 'POST', {email});
// };
