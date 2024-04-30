import { User } from '../types/user.types';

export const authService = {
  isAuthenticated: () => {
    // Check if the user is authenticated (e.g., by checking localStorage or cookies)
    const token = localStorage.getItem('token');
    return !!token;
  },

  login: async (credentials: { email: string; password: string }) => {
    // Send a login request to the backend and store the token
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
    } else {
      throw new Error(data.message);
    }
  },

  register: async (user: { email: string; password: string; name: string }) => {
    // Send a registration request to the backend
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
  },

  logout: async () => {
    // Remove the token from localStorage or clear cookies
    localStorage.removeItem('token');
  },

  getUser: async (): Promise<User | null> => {
    // Send a request to the backend to get the current user
    const token = localStorage.getItem('token');

    if (!token) {
      return null;
    }

    const response = await fetch('/api/auth/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data.user;
    } else {
      throw new Error(data.message);
    }
  },
};